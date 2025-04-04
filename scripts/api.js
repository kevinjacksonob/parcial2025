const API_URL = 'https://ubsuofrvgbvtryjuzxhb.supabase.co/rest/v1';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2a3ZtamRlZmF5dHljZGJzbnRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MjE1MjAsImV4cCI6MjA1OTI5NzUyMH0.wYHbfTAJyIp2CLfU4LcIJfJAMrVq41zUK6kw5GZ01ts';

// API Service
const api = {
  // Headers for API requests
  headers: {
    'apikey': API_KEY,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  },

  // Fetch all students
  async getStudents() {
    try {
      const response = await fetch(`${API_URL}/asignatura?select=*`, {
        headers: this.headers
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  }
};