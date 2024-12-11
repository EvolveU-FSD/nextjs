'use client'
import { useState } from 'react';

export default function CheckTipOfTheDay() {
  const [tipOfTheDay, setTipOfTheDay] = useState(null);

  async function fetchTipOfTheDay() {
    const res = await fetch('/api/tips');
    const data = await res.json();
    setTipOfTheDay(data);
  }

  return (
    <div>
      <button onClick={fetchTipOfTheDay}>Check Productivity Tip of the Day</button>
      {tipOfTheDay && <p>{tipOfTheDay.message}</p>}
    </div>
  );
}
