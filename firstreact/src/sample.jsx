import React from 'react';


const Sample = () => {
  return (
    <div>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f4f4f4'
      }}>
        
        <h1 style={{ margin: '0 10px', fontSize: '1.5rem' }}>Home Page</h1>
      </header>

      <main style={{ padding: '20px', textAlign: 'center' }}>
  <h2>Categories</h2>
  <ol style={{ textAlign: 'left', display: 'inline-block' }}>
    <li>
      Fruits
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>Mango</li>
        <li>Orange</li>
        <li>Banana</li>
      </ul>
    </li>
    <li>
      Vegetables
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>Beetroot</li>
        <li>Carrot</li>
        <li>Spinach</li>
      </ul>
    </li>
    <li>
      Birds
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>Parrot</li>
        <li>Sparrow</li>
        <li>Peacock</li>
      </ul>
    </li>
  </ol>
</main>


      {/* Footer Section */}
      <footer style={{
        textAlign: 'center',
        padding: '10px 0',
        backgroundColor: '#282c34',
        color: 'white',
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }}>
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Sample;
