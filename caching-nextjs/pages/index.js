import { useEffect, useState } from 'react';

export default function Home({ initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Next.js ISR Demo</h1>
      <div style={styles.card}>
        <h2 style={styles.heading}>Fetched To-Do Item:</h2>
        <p style={styles.text}><strong>ID:</strong> {data.id}</p>
        <p style={styles.text}><strong>Title:</strong> {data.title}</p>
        <p style={styles.text}><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
      </div>
      <p style={styles.info}>
        This data is fetched at build time and revalidated every 10 seconds.
        Refresh the page after 10 seconds to see if the data changes.
      </p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + Math.floor(Math.random() * 100));
  const initialData = await res.json();

  return {
    props: {
      initialData,
    },
    revalidate: 10, // Revalidate the data every 10 seconds
  };
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '0 20px',
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '400px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: '15px',
  },
  text: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '10px',
  },
  info: {
    fontSize: '1rem',
    color: '#666',
    textAlign: 'center',
    maxWidth: '600px',
  },
};

