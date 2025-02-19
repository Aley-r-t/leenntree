"use client";
import React, { useState } from "react";
import styles from "./Calculadora.module.css";

interface Session {
  day: string;
  entry: string;
  exit: string;
}

export default function Calculadora() {
  const [entryTime, setEntryTime] = useState("");
  const [exitTime, setExitTime] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [sessions, setSessions] = useState<Session[]>([]);
  const [montoCobrado, setMontoCobrado] = useState<number | "">("");
  const [result, setResult] = useState<{
    perHour: number;
    perDay: number;
    perWeek: number;
  } | null>(null);

  const handleAddSession = () => {
    if (!entryTime || !exitTime || !selectedDay) {
      alert("Por favor, complete la hora de entrada, salida y seleccione un día.");
      return;
    }
    setSessions([...sessions, { day: selectedDay, entry: entryTime, exit: exitTime }]);
    setEntryTime("");
    setExitTime("");
    setSelectedDay("");
  };

  const calculateHours = (start: string, end: string): number => {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    let diff = (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
    if (diff < 0) diff += 24 * 60;
    return diff / 60;
  };

  const handleCalculate = () => {
    if (sessions.length === 0) {
      alert("Agrega al menos una sesión.");
      return;
    }
    if (montoCobrado === "" || montoCobrado <= 0) {
      alert("Ingrese un monto cobrado válido.");
      return;
    }

    let totalHours = sessions.reduce((total, session) => total + calculateHours(session.entry, session.exit), 0);
    const totalSessions = sessions.length;
    setResult({
      perHour: Number(montoCobrado) / totalHours,
      perDay: Number(montoCobrado) / totalSessions,
      perWeek: Number(montoCobrado),
    });
  };

  return (
    <main className={styles.container}>
      <h1>Calculadora de Ganancias</h1>

      <div className={styles.inputGroup}>
        <label>Hora de entrada:</label>
        <input type="time" value={entryTime} onChange={(e) => setEntryTime(e.target.value)} />
      </div>

      <div className={styles.inputGroup}>
        <label>Hora de salida:</label>
        <input type="time" value={exitTime} onChange={(e) => setExitTime(e.target.value)} />
      </div>

      <div className={styles.inputGroup}>
        <label>Selecciona el día:</label>
        <div className={styles.dayButtons}>
          {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`${styles.dayButton} ${selectedDay === day ? styles.active : ""}`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <button className={styles.button} onClick={handleAddSession}>Agregar Sesión</button>

      <div>
        <h2>Sesiones agregadas:</h2>
        {sessions.length === 0 ? <p>No hay sesiones agregadas.</p> : (
          <ul className={styles.sessionList}>
            {sessions.map((session, index) => (
              <li key={index}>
                {session.day}: {session.entry} - {session.exit} ({calculateHours(session.entry, session.exit).toFixed(2)} horas)
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label>Monto cobrado:</label>
        <input
          type="number"
          value={montoCobrado}
          onChange={(e) => setMontoCobrado(e.target.value === "" ? "" : Number(e.target.value))}
          placeholder="Ej: 500"
        />
      </div>

      <button className={styles.button} onClick={handleCalculate}>Calcular Ganancias</button>

      {result && (
        <div className={styles.results}>
          <h2>Resultados:</h2>
          <p>Ganancia por hora: {result.perHour.toFixed(2)}</p>
          <p>Ganancia por sesión (día): {result.perDay.toFixed(2)}</p>
          <p>Ganancia por semana: {result.perWeek.toFixed(2)}</p>
        </div>
      )}
    </main>
  );
}
