import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
    }}>
      <p>Current Theme: <strong>{theme.charAt(0).toUpperCase() + theme.slice(1)}</strong></p>
      <button onClick={toggleTheme} style={{
        padding: '10px 20px',
        backgroundColor: theme === 'light' ? '#0070f3' : '#ff4081',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
      }}>
        Toggle Theme
      </button>
    </div>
  );
}


