import React, { useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';

// Define GraphQL queries
const TEST_ON_QUERY = gql`
  query TestOnQuery {
    testOn {
      testTrue
    }
  }
`;

const RACE_SCHEDULES_QUERY = gql`
  query RaceSchedulesQuery($group: Int!) {
    raceSchedules(where: { year2024: true, group: $group }, orderBy: date_ASC) {
      group
      id
      slug
      bannerimg {
        url
      }
    }
  }
`;

// Custom hook for retrying queries with exponential backoff
function useRetryQuery(query, variables, maxRetries = 3) {
  const [retryCount, setRetryCount] = useState(0);

  const { data, loading, error, refetch } = useQuery(query, {
    variables,
    onError: (err) => {
      if (err.networkError && err.networkError.statusCode === 429 && retryCount < maxRetries) {
        // Exponential backoff: wait before retrying
        setTimeout(() => {
          setRetryCount(retryCount + 1);
          refetch();
        }, Math.pow(2, retryCount) * 1000); // Wait time increases exponentially
      }
    },
  });

  return { data, loading, error, retryCount };
}

function RaceSchedules({ group }) {
  const { data: raceSchedulesData, loading: raceSchedulesLoading, error: raceSchedulesError } = useRetryQuery(RACE_SCHEDULES_QUERY, { group });

  if (raceSchedulesLoading) return <p>Loading races...</p>;

  if (raceSchedulesError) {
    console.error('RaceSchedules error details:', raceSchedulesError);
    return <p>Error loading race schedules: {raceSchedulesError.message}</p>;
  }

  return (
    <div className='homerace__wrap'>
      {raceSchedulesData?.raceSchedules?.length > 0 ? (
        raceSchedulesData.raceSchedules.map((race) => (
          <div className='homerace__banner' key={race.id}>
            <div>
              <Link to={`/race/${race.slug}`} state={{ id: `${race.id}` }}>
                <img src={race.bannerimg.url} alt="Race Banner" />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No races found for this month.</p>
      )}
    </div>
  );
}

export default function ShowHomeRace() {
  const { data: testOnData, loading: testOnLoading, error: testOnError } = useQuery(TEST_ON_QUERY);

  if (testOnLoading) return <p>Loading test data...</p>;
  if (testOnError) return <p>Error loading test data: {testOnError.message}</p>;

  const today = new Date();
  const currentMonth = today.getMonth(); // getMonth() returns 0-based month index
  const testTrue = testOnData?.testOn?.[0]?.testTrue ?? 0; // Default to 0 if testTrue is undefined

  // Calculate the expected group value
  const expectedGroup = currentMonth + testTrue;

  // console.log('Current Month:', currentMonth);
  // console.log('Test True:', testTrue);
  // console.log('Expected Group Value:', expectedGroup);

  return (
    <div>
      <RaceSchedules group={expectedGroup} />
    </div>
  );
}
