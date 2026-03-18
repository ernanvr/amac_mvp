import { useState } from "react";

// ═══════════════════════════════════════════════════════════
//  DATOS DE EJEMPLO REALISTAS — SGA AMAC
// ═══════════════════════════════════════════════════════════
const DATA = {
  periodoActivo: "2025-I (Enero–Junio 2025)",
  programas: [
    {
      id: 1,
      nombre: "Piano Clásico",
      nivel: "Inicial",
      cupo: 12,
      inscritos: 10,
      docente: "Mtra. Lucía Romero",
    },
    {
      id: 2,
      nombre: "Guitarra Acústica",
      nivel: "Intermedio",
      cupo: 15,
      inscritos: 13,
      docente: "Mtro. Carlos Portillo",
    },
    {
      id: 3,
      nombre: "Canto Lírico",
      nivel: "Avanzado",
      cupo: 8,
      inscritos: 7,
      docente: "Mtra. Sofía Delgado",
    },
    {
      id: 4,
      nombre: "Danza Contemporánea",
      nivel: "Inicial",
      cupo: 20,
      inscritos: 17,
      docente: "Mtra. Valeria Cruz",
    },
    {
      id: 5,
      nombre: "Violín",
      nivel: "Intermedio",
      cupo: 10,
      inscritos: 8,
      docente: "Mtro. Andrés Mejía",
    },
    {
      id: 6,
      nombre: "Percusión",
      nivel: "Inicial",
      cupo: 12,
      inscritos: 9,
      docente: "Mtro. Diego Fuentes",
    },
  ],
  estudiantes: [
    {
      id: 1,
      nombre: "Ana Gabriela Martínez",
      codigo: "EST-001",
      programa: "Piano Clásico",
      nivel: "Inicial",
      estado: "Activa",
      asistencia: 92,
      promedio: 8.7,
    },
    {
      id: 2,
      nombre: "Luis Ernesto Pérez",
      codigo: "EST-002",
      programa: "Guitarra Acústica",
      nivel: "Intermedio",
      estado: "Activo",
      asistencia: 85,
      promedio: 7.9,
    },
    {
      id: 3,
      nombre: "María José Hernández",
      codigo: "EST-003",
      programa: "Canto Lírico",
      nivel: "Avanzado",
      estado: "Activa",
      asistencia: 97,
      promedio: 9.2,
    },
    {
      id: 4,
      nombre: "Diego Alejandro Rivas",
      codigo: "EST-004",
      programa: "Danza Contemporánea",
      nivel: "Inicial",
      estado: "Activo",
      asistencia: 61,
      promedio: 6.4,
    },
    {
      id: 5,
      nombre: "Valentina Solís",
      codigo: "EST-005",
      programa: "Violín",
      nivel: "Intermedio",
      estado: "Activa",
      asistencia: 89,
      promedio: 8.1,
    },
    {
      id: 6,
      nombre: "Javier Morales",
      codigo: "EST-006",
      programa: "Guitarra Acústica",
      nivel: "Intermedio",
      estado: "Activo",
      asistencia: 74,
      promedio: 7.2,
    },
  ],
  docentes: [
    {
      id: 1,
      nombre: "Mtra. Lucía Romero",
      especialidad: "Piano",
      clases: 14,
      estudiantes: 10,
    },
    {
      id: 2,
      nombre: "Mtro. Carlos Portillo",
      especialidad: "Guitarra",
      clases: 18,
      estudiantes: 13,
    },
    {
      id: 3,
      nombre: "Mtra. Sofía Delgado",
      especialidad: "Canto",
      clases: 10,
      estudiantes: 7,
    },
    {
      id: 4,
      nombre: "Mtra. Valeria Cruz",
      especialidad: "Danza",
      clases: 20,
      estudiantes: 17,
    },
    {
      id: 5,
      nombre: "Mtro. Andrés Mejía",
      especialidad: "Violín",
      clases: 12,
      estudiantes: 8,
    },
  ],
  sesionesHoy: [
    {
      hora: "08:00",
      asignatura: "Piano Clásico – Nivel Inicial",
      aula: "Sala A-01",
      estudiante: "Ana G. Martínez",
      estado: "Programada",
    },
    {
      hora: "09:00",
      asignatura: "Piano Clásico – Nivel Inicial",
      aula: "Sala A-01",
      estudiante: "Valentina Solís",
      estado: "Completada",
    },
    {
      hora: "10:30",
      asignatura: "Guitarra Acústica – Intermedio",
      aula: "Sala B-02",
      estudiante: "Luis E. Pérez",
      estado: "Programada",
    },
    {
      hora: "14:00",
      asignatura: "Canto Lírico – Avanzado",
      aula: "Aula Principal",
      estudiante: "María J. Hernández",
      estado: "Programada",
    },
  ],
  eventos: [
    {
      id: 1,
      nombre: "Recital de Fin de Semestre",
      fecha: "2025-06-20",
      tipo: "Recital",
      estado: "Planificado",
      participantes: 24,
    },
    {
      id: 2,
      nombre: "Concurso Nacional de Piano",
      fecha: "2025-04-12",
      tipo: "Concurso",
      estado: "En curso",
      participantes: 5,
    },
    {
      id: 3,
      nombre: "Taller de Improvisación Jazz",
      fecha: "2025-03-08",
      tipo: "Taller",
      estado: "Finalizado",
      participantes: 15,
    },
  ],
  calificaciones: [
    {
      componente: "Técnica Instrumental",
      ponderacion: 30,
      nota: 8.5,
      estado: "Publicada",
    },
    {
      componente: "Interpretación Musical",
      ponderacion: 35,
      nota: 9.0,
      estado: "Publicada",
    },
    {
      componente: "Teoría Musical",
      ponderacion: 20,
      nota: 7.8,
      estado: "Borrador",
    },
    {
      componente: "Presentación Final",
      ponderacion: 15,
      nota: null,
      estado: "Pendiente",
    },
  ],
  aulas: [
    {
      id: 1,
      nombre: "Sala A-01",
      tipo: "Piano",
      capacidad: 2,
      estado: "Disponible",
    },
    {
      id: 2,
      nombre: "Sala B-02",
      tipo: "Guitarra/Cuerdas",
      capacidad: 4,
      estado: "Ocupada",
    },
    {
      id: 3,
      nombre: "Aula Principal",
      tipo: "Coral/Conjuntos",
      capacidad: 25,
      estado: "Disponible",
    },
    {
      id: 4,
      nombre: "Sala C-03",
      tipo: "Percusión",
      capacidad: 3,
      estado: "Disponible",
    },
    {
      id: 5,
      nombre: "Estudio de Grabación",
      tipo: "Multimedia",
      capacidad: 6,
      estado: "Mantenimiento",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
//  ÍCONOS SVG INLINE
// ═══════════════════════════════════════════════════════════
const Icon = ({ name, size = 18, className = "" }) => {
  const icons = {
    login: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    ),
    dashboard: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    ),
    users: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
    clipboard: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
      />
    ),
    calendar: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    ),
    check: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    ),
    pencil: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    ),
    star: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    ),
    chart: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
    music: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
      />
    ),
    family: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    ),
    events: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
      />
    ),
    document: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    ),
    settings: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
    ),
    logout: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    ),
    bell: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    ),
    home: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    ),
    eye: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
    plus: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    ),
    x: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    ),
    download: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    ),
    search: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    ),
    warn: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    ),
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
    >
      {icons[name]}
    </svg>
  );
};

// ═══════════════════════════════════════════════════════════
//  COMPONENTES REUTILIZABLES
// ═══════════════════════════════════════════════════════════
const Badge = ({ text, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-emerald-100 text-emerald-700",
    yellow: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-red-700",
    purple: "bg-purple-100 text-purple-700",
    gray: "bg-gray-100 text-gray-600",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}
    >
      {text}
    </span>
  );
};

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${className}`}
  >
    {children}
  </div>
);

const KPICard = ({ label, value, sub, icon, color = "blue" }) => {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    emerald: "from-emerald-500 to-emerald-600",
    amber: "from-amber-500 to-amber-600",
    purple: "from-purple-500 to-purple-600",
    rose: "from-rose-500 to-rose-600",
    indigo: "from-indigo-500 to-indigo-600",
  };
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {label}
          </p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
          {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
        </div>
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center text-white`}
        >
          <Icon name={icon} size={20} />
        </div>
      </div>
    </Card>
  );
};

const Table = ({ cols, rows, badge }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-gray-100">
          {cols.map((c) => (
            <th
              key={c}
              className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
          >
            {row.map((cell, j) => (
              <td key={j} className="py-3 px-4 text-gray-700">
                {badge && j === badge.col ? (
                  <Badge
                    text={cell}
                    color={badge.fn ? badge.fn(cell) : "blue"}
                  />
                ) : (
                  cell
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    />
    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <Icon name="x" size={20} />
        </button>
      </div>
      {children}
    </div>
  </div>
);

const PageHeader = ({ title, subtitle, action }) => (
  <div className="flex items-start justify-between mb-6">
    <div>
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
    </div>
    {action}
  </div>
);

const Btn = ({ children, onClick, variant = "primary", size = "md", icon }) => {
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    success: "bg-emerald-500 hover:bg-emerald-600 text-white",
    ghost: "hover:bg-gray-100 text-gray-600",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 font-semibold rounded-xl transition-colors ${variants[variant]} ${sizes[size]}`}
    >
      {icon && <Icon name={icon} size={15} />}
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-01 · LOGIN
// ═══════════════════════════════════════════════════════════
const LoginScreen = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState("coordinacion");

  const roles = [
    { value: "coordinacion", label: "Coordinación Académica" },
    { value: "docente", label: "Docente/Instructor" },
    { value: "estudiante", label: "Estudiante" },
    { value: "encargado", label: "Encargado/Familia" },
    { value: "registro", label: "Registro/Secretaría" },
    { value: "direccion", label: "Dirección" },
    { value: "admin", label: "Administrador" },
  ];

  const handleLogin = () => {
    if (!user || !pass) {
      setError("Ingresa usuario y contraseña.");
      return;
    }
    if (pass.length < 4) {
      setError("Contraseña incorrecta.");
      return;
    }
    onLogin(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 flex items-center justify-center p-4">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-violet-500 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur mb-4">
            <Icon name="music" size={38} className="text-amber-300" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            SGA AMAC
          </h1>
          <p className="text-indigo-300 text-sm mt-1">
            Academia de Música, Artes y CreaTalento
          </p>
        </div>

        {/* Tarjeta de login */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-lg font-semibold text-white mb-6">
            Iniciar Sesión
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-indigo-200 mb-1.5">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="usuario@amac.edu.sv"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                  setError("");
                }}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-indigo-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-indigo-200 mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                    setError("");
                  }}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-indigo-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 pr-11"
                />
                <button
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3 text-indigo-300 hover:text-white"
                >
                  <Icon name="eye" size={18} />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-indigo-200 mb-1.5">
                Ingresar como (demo)
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {roles.map((r) => (
                  <option
                    key={r.value}
                    value={r.value}
                    className="text-gray-800"
                  >
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <div className="mt-3 flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-2.5">
              <Icon name="warn" size={16} className="text-red-300 shrink-0" />
              <p className="text-red-200 text-xs">{error}</p>
            </div>
          )}

          <button
            onClick={handleLogin}
            className="mt-6 w-full bg-amber-400 hover:bg-amber-300 text-indigo-950 font-bold py-3.5 rounded-xl transition-all text-sm"
          >
            Iniciar Sesión
          </button>

          <p className="text-center mt-4">
            <span className="text-indigo-300 text-xs hover:text-white cursor-pointer">
              ¿Olvidaste tu contraseña?
            </span>
          </p>
        </div>

        <p className="text-center text-indigo-400 text-xs mt-6">
          🔒 Conexión segura HTTPS · EP 03-2025 · ESIT
        </p>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  LAYOUT PRINCIPAL (Sidebar + Contenido)
// ═══════════════════════════════════════════════════════════
const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard", group: "General" },
  {
    id: "matricula",
    label: "Matrícula General",
    icon: "clipboard",
    group: "Matrícula",
  },
  {
    id: "inscripcion",
    label: "Inscripción",
    icon: "pencil",
    group: "Matrícula",
  },
  {
    id: "programacion",
    label: "Programación de Clases",
    icon: "calendar",
    group: "Académico",
  },
  { id: "asistencia", label: "Asistencia", icon: "check", group: "Académico" },
  {
    id: "calificaciones",
    label: "Calificaciones",
    icon: "star",
    group: "Académico",
  },
  {
    id: "portal_estudiante",
    label: "Portal Estudiante",
    icon: "users",
    group: "Portales",
  },
  {
    id: "portal_encargados",
    label: "Portal Familias",
    icon: "family",
    group: "Portales",
  },
  {
    id: "periodos",
    label: "Periodos y Oferta",
    icon: "calendar",
    group: "Gestión",
  },
  {
    id: "eventos",
    label: "Eventos y Recitales",
    icon: "events",
    group: "Gestión",
  },
  {
    id: "reportes",
    label: "Reportes y Dashboard",
    icon: "chart",
    group: "Dirección",
  },
  {
    id: "configuracion",
    label: "Configuración",
    icon: "settings",
    group: "Admin",
  },
];

const MainLayout = ({ screen, setScreen, role, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const roleLabels = {
    coordinacion: "Coordinación Académica",
    docente: "Docente/Instructor",
    estudiante: "Estudiante",
    encargado: "Encargado",
    registro: "Registro/Secretaría",
    direccion: "Dirección",
    admin: "Administrador",
  };

  const groups = [...new Set(navItems.map((n) => n.group))];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-16"} bg-indigo-950 flex flex-col transition-all duration-300 shrink-0`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-indigo-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center shrink-0">
            <Icon name="music" size={18} className="text-indigo-950" />
          </div>
          {sidebarOpen && (
            <div>
              <p className="text-white font-bold text-sm leading-tight">
                SGA AMAC
              </p>
              <p className="text-indigo-400 text-xs">Sistema Académico</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4">
          {groups.map((group) => (
            <div key={group} className="mb-4">
              {sidebarOpen && (
                <p className="px-4 text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-1">
                  {group}
                </p>
              )}
              {navItems
                .filter((n) => n.group === group)
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScreen(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all ${screen === item.id ? "bg-indigo-800 text-white border-r-2 border-amber-400" : "text-indigo-300 hover:bg-indigo-900 hover:text-white"}`}
                  >
                    <Icon name={item.icon} size={18} className="shrink-0" />
                    {sidebarOpen && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </button>
                ))}
            </div>
          ))}
        </nav>

        {/* Usuario */}
        <div className="p-4 border-t border-indigo-800">
          {sidebarOpen ? (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-700 flex items-center justify-center text-white text-sm font-bold">
                A
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-semibold truncate">
                  Admin Usuario
                </p>
                <p className="text-indigo-400 text-xs truncate">
                  {roleLabels[role]}
                </p>
              </div>
              <button
                onClick={onLogout}
                className="text-indigo-400 hover:text-white"
              >
                <Icon name="logout" size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={onLogout}
              className="text-indigo-400 hover:text-white mx-auto block"
            >
              <Icon name="logout" size={16} />
            </button>
          )}
        </div>
      </aside>

      {/* Contenido */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-14 bg-white border-b border-gray-100 flex items-center px-6 gap-4 shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-gray-600"
          >
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-current" />
              <div className="w-5 h-0.5 bg-current" />
              <div className="w-5 h-0.5 bg-current" />
            </div>
          </button>
          <div className="flex-1" />
          <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-semibold">
            📅 {DATA.periodoActivo}
          </span>
          <button className="relative text-gray-400 hover:text-gray-600">
            <Icon name="bell" size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>
        </header>

        {/* Pantalla activa */}
        <main className="flex-1 overflow-y-auto p-6">
          <ScreenRouter screen={screen} setScreen={setScreen} />
        </main>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-02 · DASHBOARD
// ═══════════════════════════════════════════════════════════
const DashboardScreen = ({ setScreen }) => (
  <div>
    <PageHeader
      title="Dashboard"
      subtitle="Resumen general del periodo académico 2025-I"
    />

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <KPICard
        label="Estudiantes Activos"
        value="64"
        sub="+4 este periodo"
        icon="users"
        color="blue"
      />
      <KPICard
        label="Tasa de Retención"
        value="91%"
        sub="Meta: 90%"
        icon="chart"
        color="emerald"
      />
      <KPICard
        label="Asistencia Promedio"
        value="87%"
        sub="Última semana"
        icon="check"
        color="amber"
      />
      <KPICard
        label="Eventos del Periodo"
        value="3"
        sub="1 en curso"
        icon="events"
        color="purple"
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      {/* Sesiones del día */}
      <Card className="p-5 lg:col-span-2">
        <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Icon name="calendar" size={18} className="text-indigo-500" />{" "}
          Sesiones de hoy
        </h2>
        <div className="space-y-3">
          {DATA.sesionesHoy.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 rounded-xl bg-gray-50"
            >
              <div className="text-xs font-bold text-indigo-600 w-10 shrink-0">
                {s.hora}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {s.asignatura}
                </p>
                <p className="text-xs text-gray-400">
                  {s.estudiante} · {s.aula}
                </p>
              </div>
              <Badge
                text={s.estado}
                color={s.estado === "Completada" ? "green" : "blue"}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Accesos rápidos */}
      <Card className="p-5">
        <h2 className="font-bold text-gray-800 mb-4">Acceso Rápido</h2>
        <div className="space-y-2">
          {[
            {
              label: "Nueva Matrícula",
              icon: "clipboard",
              screen: "matricula",
              color: "bg-indigo-50 text-indigo-700",
            },
            {
              label: "Registrar Asistencia",
              icon: "check",
              screen: "asistencia",
              color: "bg-emerald-50 text-emerald-700",
            },
            {
              label: "Ingresar Notas",
              icon: "star",
              screen: "calificaciones",
              color: "bg-amber-50 text-amber-700",
            },
            {
              label: "Ver Reportes",
              icon: "chart",
              screen: "reportes",
              color: "bg-purple-50 text-purple-700",
            },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setScreen(item.screen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${item.color} hover:opacity-80 transition text-sm font-semibold`}
            >
              <Icon name={item.icon} size={16} />
              {item.label}
            </button>
          ))}
        </div>
      </Card>
    </div>

    {/* Programas */}
    <Card className="p-5">
      <h2 className="font-bold text-gray-800 mb-4">
        Programas Artísticos – Ocupación
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {DATA.programas.map((p) => (
          <div
            key={p.id}
            className="p-4 rounded-xl border border-gray-100 hover:border-indigo-200 transition"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-800">{p.nombre}</p>
              <Badge
                text={p.nivel}
                color={
                  p.nivel === "Inicial"
                    ? "blue"
                    : p.nivel === "Intermedio"
                      ? "amber"
                      : "purple"
                }
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <Icon name="users" size={13} /> {p.inscritos}/{p.cupo} estudiantes
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full bg-indigo-500"
                style={{ width: `${(p.inscritos / p.cupo) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

// ═══════════════════════════════════════════════════════════
//  P-03 · MATRÍCULA GENERAL
// ═══════════════════════════════════════════════════════════
const MatriculaScreen = ({ setScreen }) => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const [form, setForm] = useState({ estudiante: "", periodo: "2025-I" });

  const estadoColor = (e) =>
    e === "Activa" || e === "Activo"
      ? "green"
      : e === "Pendiente"
        ? "yellow"
        : "red";
  const filtered = DATA.estudiantes.filter(
    (e) =>
      e.nombre.toLowerCase().includes(search.toLowerCase()) ||
      e.codigo.includes(search),
  );

  return (
    <div>
      <PageHeader
        title="Matrícula General"
        subtitle="RF-10 · Gestión de matrículas del periodo académico"
        action={
          <Btn icon="plus" onClick={() => setShowModal(true)}>
            Nueva Matrícula
          </Btn>
        }
      />

      <div className="grid grid-cols-3 gap-4 mb-5">
        <KPICard
          label="Total Matrículas"
          value="64"
          icon="clipboard"
          color="blue"
        />
        <KPICard
          label="Matrículas Activas"
          value="61"
          icon="check"
          color="emerald"
        />
        <KPICard label="Pendientes" value="3" icon="warn" color="amber" />
      </div>

      <Card>
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Icon
              name="search"
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre o código…"
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <span className="text-xs text-gray-400">
            {filtered.length} estudiantes
          </span>
        </div>
        <Table
          cols={[
            "Código",
            "Estudiante",
            "Programa",
            "Nivel",
            "Asistencia",
            "Promedio",
            "Estado",
            "Acciones",
          ]}
          rows={filtered.map((e) => [
            e.codigo,
            e.nombre,
            e.programa,
            e.nivel,
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-gray-100 rounded-full">
                <div
                  className={`h-1.5 rounded-full ${e.asistencia < 70 ? "bg-red-400" : "bg-emerald-400"}`}
                  style={{ width: `${e.asistencia}%` }}
                />
              </div>
              <span
                className={`text-xs font-semibold ${e.asistencia < 70 ? "text-red-500" : "text-gray-600"}`}
              >
                {e.asistencia}%
              </span>
            </div>,
            <span className="font-bold">{e.promedio}</span>,
            e.estado,
            <div className="flex gap-1">
              <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500">
                <Icon name="eye" size={15} />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500">
                <Icon name="pencil" size={15} />
              </button>
            </div>,
          ])}
          badge={{ col: 6, fn: estadoColor }}
        />
      </Card>

      {showModal && (
        <Modal title="Nueva Matrícula" onClose={() => setShowModal(false)}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Periodo Académico
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option>2025-I (Enero–Junio 2025)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Buscar Estudiante
              </label>
              <input
                placeholder="Nombre o código del estudiante…"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Tipo de Matrícula
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option>Nueva (primer ingreso)</option>
                <option>Continuación</option>
                <option>Reingreso</option>
              </select>
            </div>
            <div className="flex gap-3 mt-2">
              <Btn variant="secondary" onClick={() => setShowModal(false)}>
                Cancelar
              </Btn>
              <Btn
                onClick={() => {
                  setShowModal(false);
                  setScreen("inscripcion");
                }}
              >
                Confirmar y continuar →
              </Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-04 · INSCRIPCIÓN
// ═══════════════════════════════════════════════════════════
const InscripcionScreen = () => {
  const [step, setStep] = useState(0);
  const [selPrograma, setSelPrograma] = useState(null);
  const [selAsignaturas, setSelAsignaturas] = useState([]);

  const asignaturas = [
    {
      id: 1,
      nombre: "Técnica Instrumental",
      horas: 2,
      prereq: true,
      cupo: "10/12",
    },
    {
      id: 2,
      nombre: "Teoría Musical Básica",
      horas: 1,
      prereq: true,
      cupo: "8/10",
    },
    {
      id: 3,
      nombre: "Lectura de Partituras",
      horas: 1,
      prereq: false,
      cupo: "6/10",
      bloqueada: true,
    },
    {
      id: 4,
      nombre: "Historia de la Música",
      horas: 1,
      prereq: true,
      cupo: "9/12",
    },
  ];

  const steps = [
    "Seleccionar Programa",
    "Seleccionar Nivel",
    "Seleccionar Asignaturas",
  ];

  const toggleAsignatura = (id) => {
    setSelAsignaturas((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div>
      <PageHeader
        title="Inscripción a Programa y Asignaturas"
        subtitle="RF-11, RF-12 · Ana Gabriela Martínez – EST-001"
      />

      {/* Stepper */}
      <div className="flex items-center gap-2 mb-6">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i <= step ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-400"}`}
            >
              {i < step ? "✓" : i + 1}
            </div>
            <span
              className={`text-xs font-medium hidden sm:block ${i <= step ? "text-indigo-700" : "text-gray-400"}`}
            >
              {s}
            </span>
            {i < steps.length - 1 && (
              <div
                className={`w-8 h-0.5 ${i < step ? "bg-indigo-400" : "bg-gray-200"}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          {step === 0 && (
            <Card className="p-5">
              <h3 className="font-bold text-gray-800 mb-4">
                Elige el Programa Artístico
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DATA.programas.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelPrograma(p)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selPrograma?.id === p.id ? "border-indigo-500 bg-indigo-50" : "border-gray-100 hover:border-indigo-200"}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {p.nombre}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {p.docente}
                        </p>
                      </div>
                      <Badge
                        text={p.nivel}
                        color={
                          p.nivel === "Inicial"
                            ? "blue"
                            : p.nivel === "Intermedio"
                              ? "amber"
                              : "purple"
                        }
                      />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Cupos disponibles</span>
                        <span>
                          {p.inscritos}/{p.cupo}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full">
                        <div
                          className="h-1.5 rounded-full bg-indigo-400"
                          style={{ width: `${(p.inscritos / p.cupo) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Btn onClick={() => selPrograma && setStep(1)}>Siguiente →</Btn>
              </div>
            </Card>
          )}

          {step === 1 && (
            <Card className="p-5">
              <h3 className="font-bold text-gray-800 mb-4">Nivel de Estudio</h3>
              <div className="space-y-3">
                {["Inicial", "Intermedio", "Avanzado"].map((nivel) => (
                  <div
                    key={nivel}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${nivel === "Inicial" ? "border-indigo-500 bg-indigo-50" : "border-gray-100 hover:border-gray-200"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${nivel === "Inicial" ? "border-indigo-500 bg-indigo-500" : "border-gray-300"}`}
                      />
                      <div>
                        <p className="font-semibold text-sm text-gray-800">
                          Nivel {nivel}
                        </p>
                        <p className="text-xs text-gray-400">
                          {nivel === "Inicial"
                            ? "Sin requisitos previos"
                            : `Requiere nivel ${nivel === "Intermedio" ? "Inicial" : "Intermedio"} aprobado`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <Btn variant="secondary" onClick={() => setStep(0)}>
                  ← Anterior
                </Btn>
                <Btn onClick={() => setStep(2)}>Siguiente →</Btn>
              </div>
            </Card>
          )}

          {step === 2 && (
            <Card className="p-5">
              <h3 className="font-bold text-gray-800 mb-4">
                Selección de Asignaturas
              </h3>
              <div className="space-y-3">
                {asignaturas.map((a) => (
                  <div
                    key={a.id}
                    onClick={() => !a.bloqueada && toggleAsignatura(a.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${a.bloqueada ? "opacity-50 cursor-not-allowed border-gray-100" : selAsignaturas.includes(a.id) ? "border-indigo-500 bg-indigo-50 cursor-pointer" : "border-gray-100 hover:border-gray-200 cursor-pointer"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center ${selAsignaturas.includes(a.id) ? "border-indigo-500 bg-indigo-500" : "border-gray-300"}`}
                      >
                        {selAsignaturas.includes(a.id) && (
                          <Icon name="check" size={10} className="text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-sm text-gray-800">
                            {a.nombre}
                          </p>
                          {a.bloqueada && (
                            <Badge text="Prereq. faltante" color="red" />
                          )}
                        </div>
                        <p className="text-xs text-gray-400">
                          {a.horas} hr/semana · Cupo: {a.cupo}
                        </p>
                      </div>
                      {!a.bloqueada && (
                        <Badge text="✓ Prereq. OK" color="green" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <Btn variant="secondary" onClick={() => setStep(1)}>
                  ← Anterior
                </Btn>
                <Btn variant="success" icon="check" onClick={() => setStep(3)}>
                  Confirmar Inscripción
                </Btn>
              </div>
            </Card>
          )}

          {step === 3 && (
            <Card className="p-5 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Icon name="check" size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                ¡Inscripción Confirmada!
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Se inscribieron {selAsignaturas.length} asignaturas en{" "}
                {selPrograma?.nombre} – Nivel Inicial
              </p>
              <Btn className="mt-4" onClick={() => setStep(0)}>
                Nueva inscripción
              </Btn>
            </Card>
          )}
        </div>

        {/* Resumen lateral */}
        <Card className="p-5 h-fit">
          <h3 className="font-bold text-gray-800 mb-3">Resumen</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Estudiante</span>
              <span className="font-semibold text-gray-700 text-right text-xs">
                Ana G. Martínez
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Periodo</span>
              <span className="font-semibold text-gray-700 text-xs">
                2025-I
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Programa</span>
              <span className="font-semibold text-gray-700 text-xs">
                {selPrograma?.nombre || "—"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Nivel</span>
              <span className="font-semibold text-gray-700">Inicial</span>
            </div>
            <div className="border-t border-gray-100 pt-2 mt-2">
              <p className="text-xs font-semibold text-gray-400 mb-1">
                Asignaturas ({selAsignaturas.length})
              </p>
              {selAsignaturas.map((id) => {
                const a = asignaturas.find((x) => x.id === id);
                return (
                  <p key={id} className="text-xs text-gray-600 py-0.5">
                    • {a?.nombre}
                  </p>
                );
              })}
              {selAsignaturas.length === 0 && (
                <p className="text-xs text-gray-300 italic">
                  Ninguna seleccionada
                </p>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-05 · PROGRAMACIÓN DE CLASES
// ═══════════════════════════════════════════════════════════
const ProgramacionScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const horas = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  const sesiones = [
    {
      dia: 0,
      hora: 0,
      asig: "Piano – Ana M.",
      sala: "A-01",
      tipo: "individual",
      color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    },
    {
      dia: 0,
      hora: 2,
      asig: "Piano – Valentina S.",
      sala: "A-01",
      tipo: "individual",
      color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    },
    {
      dia: 1,
      hora: 1,
      asig: "Guitarra – Grupo A",
      sala: "B-02",
      tipo: "grupal",
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      dia: 2,
      hora: 4,
      asig: "Canto – María H.",
      sala: "Principal",
      tipo: "individual",
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
    {
      dia: 3,
      hora: 2,
      asig: "Danza – Grupo B",
      sala: "Aula Grande",
      tipo: "grupal",
      color: "bg-rose-100 text-rose-700 border-rose-200",
    },
    {
      dia: 4,
      hora: 0,
      asig: "Violín – Valentina S.",
      sala: "A-01",
      tipo: "individual",
      color: "bg-teal-100 text-teal-700 border-teal-200",
    },
    {
      dia: 5,
      hora: 1,
      asig: "Percusión – Grupo C",
      sala: "C-03",
      tipo: "grupal",
      color: "bg-orange-100 text-orange-700 border-orange-200",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Programación de Clases"
        subtitle="RF-14, RF-15 · Semana del 17 al 22 de Marzo 2025"
        action={
          <Btn icon="plus" onClick={() => setShowModal(true)}>
            Nueva Sesión
          </Btn>
        }
      />

      <div className="grid grid-cols-4 gap-3 mb-5">
        <KPICard
          label="Sesiones semana"
          value="28"
          icon="calendar"
          color="blue"
        />
        <KPICard label="Individuales" value="16" icon="users" color="indigo" />
        <KPICard label="Grupales" value="12" icon="music" color="purple" />
        <KPICard
          label="Aulas disponibles"
          value="4/5"
          icon="home"
          color="emerald"
        />
      </div>

      {/* Calendario */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Header días */}
            <div
              className="grid border-b border-gray-100"
              style={{ gridTemplateColumns: "80px repeat(6, 1fr)" }}
            >
              <div className="p-3 bg-gray-50" />
              {dias.map((d) => (
                <div
                  key={d}
                  className="p-3 text-center text-xs font-bold text-gray-500 bg-gray-50 border-l border-gray-100"
                >
                  {d}
                </div>
              ))}
            </div>
            {/* Filas horas */}
            {horas.map((hora, hi) => (
              <div
                key={hora}
                className="grid border-b border-gray-50"
                style={{ gridTemplateColumns: "80px repeat(6, 1fr)" }}
              >
                <div className="p-3 text-xs text-gray-400 font-semibold text-right pr-4 bg-gray-50">
                  {hora}
                </div>
                {dias.map((_, di) => {
                  const s = sesiones.find((s) => s.dia === di && s.hora === hi);
                  return (
                    <div
                      key={di}
                      className="border-l border-gray-50 p-1 h-14 relative"
                    >
                      {s && (
                        <div
                          className={`absolute inset-1 rounded-lg border text-xs p-1.5 ${s.color} cursor-pointer hover:opacity-80`}
                        >
                          <p className="font-bold truncate">{s.asig}</p>
                          <p className="opacity-70 truncate">{s.sala}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Leyenda */}
      <div className="flex items-center gap-4 mt-3 flex-wrap">
        {[
          { label: "Individual", color: "bg-indigo-200" },
          { label: "Grupal", color: "bg-amber-200" },
          { label: "Disponible", color: "bg-gray-100" },
        ].map((l) => (
          <div
            key={l.label}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <div className={`w-3 h-3 rounded ${l.color}`} />
            {l.label}
          </div>
        ))}
      </div>

      {showModal && (
        <Modal
          title="Programar Nueva Sesión"
          onClose={() => setShowModal(false)}
        >
          <div className="space-y-3">
            {[
              {
                label: "Tipo de sesión",
                type: "select",
                opts: ["Clase individual", "Clase grupal", "Ensayo"],
              },
              {
                label: "Estudiante / Grupo",
                type: "select",
                opts: DATA.estudiantes.map((e) => e.nombre),
              },
              {
                label: "Docente",
                type: "select",
                opts: DATA.docentes.map((d) => d.nombre),
              },
              {
                label: "Sala / Aula",
                type: "select",
                opts: DATA.aulas
                  .filter((a) => a.estado !== "Mantenimiento")
                  .map((a) => a.nombre),
              },
              { label: "Fecha", type: "date" },
              { label: "Hora inicio", type: "time" },
              { label: "Hora fin", type: "time" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  {f.label}
                </label>
                {f.type === "select" ? (
                  <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    {f.opts.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={f.type}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                )}
              </div>
            ))}
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 text-xs text-amber-700 flex items-center gap-2">
              <Icon name="warn" size={14} /> Verificando disponibilidad de
              docente y sala…
            </div>
            <div className="flex gap-3">
              <Btn variant="secondary" onClick={() => setShowModal(false)}>
                Cancelar
              </Btn>
              <Btn onClick={() => setShowModal(false)}>Programar Sesión</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-06 · ASISTENCIA
// ═══════════════════════════════════════════════════════════
const AsistenciaScreen = () => {
  const sesion = {
    asignatura: "Guitarra Acústica – Nivel Intermedio",
    hora: "10:30",
    sala: "Sala B-02",
    docente: "Mtro. Carlos Portillo",
  };
  const [lista, setLista] = useState([
    {
      nombre: "Luis Ernesto Pérez",
      codigo: "EST-002",
      estado: "presente",
      obs: "",
    },
    { nombre: "Javier Morales", codigo: "EST-006", estado: "ausente", obs: "" },
    {
      nombre: "Roberto Giménez",
      codigo: "EST-009",
      estado: "presente",
      obs: "",
    },
    {
      nombre: "Carmen López",
      codigo: "EST-011",
      estado: "justificado",
      obs: "Cita médica",
    },
    { nombre: "Fernanda Ríos", codigo: "EST-014", estado: "presente", obs: "" },
  ]);

  const toggle = (i, estado) =>
    setLista((prev) => prev.map((e, j) => (j === i ? { ...e, estado } : e)));
  const presentes = lista.filter((e) => e.estado === "presente").length;
  const ausentes = lista.filter((e) => e.estado === "ausente").length;

  return (
    <div>
      <PageHeader
        title="Registro de Asistencia"
        subtitle="RF-23, RF-24 · Sesión del 17 de Marzo 2025"
      />

      {/* Info sesión */}
      <Card className="p-4 mb-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Asignatura", val: sesion.asignatura },
            { label: "Hora", val: sesion.hora },
            { label: "Sala", val: sesion.sala },
            { label: "Docente", val: sesion.docente },
          ].map((f) => (
            <div key={f.label}>
              <p className="text-xs text-gray-400">{f.label}</p>
              <p className="text-sm font-semibold text-gray-800">{f.val}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Contadores */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{presentes}</p>
          <p className="text-xs text-emerald-500 font-semibold">Presentes</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-red-500">{ausentes}</p>
          <p className="text-xs text-red-400 font-semibold">Ausentes</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">
            {lista.filter((e) => e.estado === "justificado").length}
          </p>
          <p className="text-xs text-amber-500 font-semibold">Justificados</p>
        </div>
      </div>

      {ausentes > 0 && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 mb-4">
          <Icon name="warn" size={18} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-700">
            <strong>{ausentes} inasistencia(s) registradas.</strong> Se generará
            reporte automático al guardar. (RF-24)
          </p>
        </div>
      )}

      <Card>
        <div className="divide-y divide-gray-50">
          {lista.map((est, i) => (
            <div key={i} className="p-4 flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm shrink-0">
                {est.nombre
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800">
                  {est.nombre}
                </p>
                <p className="text-xs text-gray-400">{est.codigo}</p>
              </div>
              <div className="flex gap-2">
                {["presente", "ausente", "justificado"].map((e) => (
                  <button
                    key={e}
                    onClick={() => toggle(i, e)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      est.estado === e
                        ? e === "presente"
                          ? "bg-emerald-500 text-white border-emerald-500"
                          : e === "ausente"
                            ? "bg-red-500 text-white border-red-500"
                            : "bg-amber-500 text-white border-amber-500"
                        : "bg-white text-gray-400 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {e.charAt(0).toUpperCase() + e.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-100 flex justify-between items-center">
          <p className="text-xs text-gray-400">
            {presentes}/{lista.length} presentes (
            {Math.round((presentes / lista.length) * 100)}%)
          </p>
          <div className="flex gap-2">
            <Btn variant="secondary">Guardar borrador</Btn>
            <Btn icon="check" variant="success">
              Confirmar asistencia
            </Btn>
          </div>
        </div>
      </Card>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-07 · CALIFICACIONES
// ═══════════════════════════════════════════════════════════
const CalificacionesScreen = () => {
  const [notas, setNotas] = useState(DATA.calificaciones);
  const [obs, setObs] = useState(
    "La estudiante demuestra progresión técnica notable en el control de digitación y matiz dinámico. Se recomienda fortalecer la lectura a primera vista.",
  );

  const total = notas.reduce(
    (acc, n) => acc + (n.nota ? (n.nota * n.ponderacion) / 100 : 0),
    0,
  );
  const updateNota = (i, val) =>
    setNotas((prev) =>
      prev.map((n, j) =>
        j === i ? { ...n, nota: parseFloat(val) || null } : n,
      ),
    );
  const estadoColor = (e) =>
    e === "Publicada" ? "green" : e === "Borrador" ? "yellow" : "gray";

  return (
    <div>
      <PageHeader
        title="Registro de Calificaciones"
        subtitle="RF-19, RF-20, RF-21, RF-22 · Ana G. Martínez · Piano – Nivel Inicial"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          {/* Tabla de componentes */}
          <Card>
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-800">
                Estructura de Evaluación
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Periodo 2025-I · Guitarra Acústica
              </p>
            </div>
            <div className="divide-y divide-gray-50">
              {notas.map((c, i) => (
                <div key={i} className="p-4 flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-semibold text-gray-800">
                        {c.componente}
                      </p>
                      <Badge text={c.estado} color={estadoColor(c.estado)} />
                    </div>
                    <p className="text-xs text-gray-400">
                      Ponderación: {c.ponderacion}%
                    </p>
                  </div>
                  <div className="w-28">
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={c.nota ?? ""}
                      onChange={(e) => updateNota(i, e.target.value)}
                      placeholder="—"
                      className={`w-full text-center border-2 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none transition-colors ${c.nota === null ? "border-gray-200 text-gray-400" : c.nota >= 6 ? "border-emerald-300 text-emerald-700 bg-emerald-50" : "border-red-300 text-red-600 bg-red-50"}`}
                    />
                  </div>
                  <div className="w-16 text-right">
                    <p className="text-xs text-gray-400">Contrib.</p>
                    <p className="text-sm font-bold text-gray-700">
                      {c.nota
                        ? ((c.nota * c.ponderacion) / 100).toFixed(2)
                        : "—"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Nota final */}
            <div className="p-4 bg-indigo-50 border-t border-indigo-100 flex items-center justify-between rounded-b-2xl">
              <div>
                <p className="text-xs font-semibold text-indigo-400">
                  NOTA FINAL (RF-22)
                </p>
                <p className="text-xs text-indigo-300">
                  Cálculo automático en tiempo real
                </p>
              </div>
              <div
                className={`text-3xl font-black ${total >= 6 ? "text-emerald-600" : "text-red-500"}`}
              >
                {total.toFixed(2)}
                <span className="text-sm font-normal text-gray-400 ml-1">
                  / 10.00
                </span>
              </div>
            </div>
          </Card>

          {/* Observaciones artísticas */}
          <Card className="p-5">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Icon name="pencil" size={16} className="text-indigo-500" />{" "}
              Observaciones Artísticas (RF-21)
            </h3>
            <textarea
              rows={4}
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Técnica", "Interpretación", "Expresividad"].map((cat) => (
                <div
                  key={cat}
                  className="text-center p-2 bg-gray-50 rounded-xl"
                >
                  <div className="text-lg font-bold text-indigo-600">
                    {cat === "Técnica" ? "A" : cat === "Interpretación" ? "B+" : "A-"}
                  </div>
                  <p className="text-xs text-gray-400">{cat}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Panel lateral */}
        <div className="space-y-4">
          <Card className="p-5">
            <h3 className="font-bold text-gray-800 mb-3">
              Historial del Estudiante
            </h3>
            <div className="space-y-2">
              {[
                { periodo: "2024-II", nota: 7.8, estado: "Aprobado" },
                { periodo: "2024-I", nota: 7.1, estado: "Aprobado" },
                { periodo: "2023-II", nota: 5.9, estado: "Reprobado" },
              ].map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-gray-500">{h.periodo}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700">{h.nota}</span>
                    <Badge
                      text={h.estado}
                      color={h.estado === "Aprobado" ? "green" : "red"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-bold text-gray-800 mb-3">
              Estado de publicación
            </h3>
            <div className="space-y-2">
              <div
                className={`p-3 rounded-xl ${total >= 6 ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"}`}
              >
                <p
                  className={`text-sm font-bold ${total >= 6 ? "text-emerald-700" : "text-red-600"}`}
                >
                  {total >= 6 ? "✓ Aprobado" : "✗ No aprobado"}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Mínimo requerido: 6.0
                </p>
              </div>
            </div>
            <div className="space-y-2 mt-3">
              <Btn variant="secondary" className="w-full">
                Guardar borrador
              </Btn>
              <Btn className="w-full" icon="check">
                Publicar calificación
              </Btn>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-08 · PORTAL ESTUDIANTE
// ═══════════════════════════════════════════════════════════
const PortalEstudianteScreen = () => {
  const est = DATA.estudiantes[0];
  const asigs = [
    {
      nombre: "Técnica Instrumental",
      nota: 8.5,
      asist: 92,
      estado: "Aprobado",
    },
    {
      nombre: "Teoría Musical Básica",
      nota: 9.1,
      asist: 95,
      estado: "Aprobado",
    },
    {
      nombre: "Lectura de Partituras",
      nota: 7.8,
      asist: 88,
      estado: "Aprobado",
    },
    {
      nombre: "Historia de la Música",
      nota: null,
      asist: 90,
      estado: "En curso",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Mi Portal Académico"
        subtitle="RF-31, RF-25, RF-30, RF-26 · Vista Estudiante"
      />

      {/* Perfil */}
      <Card className="p-5 mb-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xl font-black">
            A
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-800">{est.nombre}</h2>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <span className="text-xs text-gray-500">{est.codigo}</span>
              <Badge text={est.programa} color="indigo" />
              <Badge text={`Nivel ${est.nivel}`} color="blue" />
              <Badge text="Activa" color="green" />
            </div>
          </div>
          <Btn variant="secondary" icon="download" size="sm">
            Constancia
          </Btn>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-3 mb-5">
        <KPICard
          label="Promedio General"
          value={est.promedio}
          icon="star"
          color="amber"
        />
        <KPICard
          label="Asistencia"
          value={`${est.asistencia}%`}
          icon="check"
          color="emerald"
        />
        <KPICard
          label="Periodos cursados"
          value="3"
          icon="calendar"
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Asignaturas actuales */}
        <Card className="p-5">
          <h3 className="font-bold text-gray-800 mb-4">Asignaturas 2025-I</h3>
          <div className="space-y-3">
            {asigs.map((a, i) => (
              <div
                key={i}
                className="p-3 rounded-xl border border-gray-100 hover:border-indigo-100 transition"
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm font-semibold text-gray-800">
                    {a.nombre}
                  </p>
                  <Badge
                    text={a.estado}
                    color={a.estado === "Aprobado" ? "green" : "blue"}
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Asistencia</span>
                      <span>{a.asist}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div
                        className="h-1.5 rounded-full bg-indigo-400"
                        style={{ width: `${a.asist}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Nota</p>
                    <p className="text-lg font-black text-gray-800">
                      {a.nota ?? "—"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Horario semanal */}
        <Card className="p-5">
          <h3 className="font-bold text-gray-800 mb-4">
            Mi Horario – Semana actual
          </h3>
          <div className="space-y-2">
            {DATA.sesionesHoy.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
              >
                <div className="w-12 text-center">
                  <p className="text-xs font-bold text-indigo-600">{s.hora}</p>
                </div>
                <div className="w-0.5 h-8 bg-indigo-200" />
                <div>
                  <p className="text-xs font-semibold text-gray-700">
                    {s.asignatura}
                  </p>
                  <p className="text-xs text-gray-400">{s.aula}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Historial */}
        <Card className="p-5 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">
              Historial Académico (RF-25)
            </h3>
            <Btn variant="secondary" icon="download" size="sm">
              Exportar PDF
            </Btn>
          </div>
          <Table
            cols={[
              "Periodo",
              "Programa",
              "Nivel",
              "Promedio",
              "Asistencia",
              "Estado",
            ]}
            rows={[
              [
                "2025-I",
                "Piano Clásico",
                "Inicial",
                "En curso",
                "92%",
                "En curso",
              ],
              ["2024-II", "Piano Clásico", "Inicial", "8.2", "89%", "Aprobado"],
              ["2024-I", "Piano Clásico", "Inicial", "7.6", "85%", "Aprobado"],
            ]}
            badge={{
              col: 5,
              fn: (e) =>
                e === "Aprobado" ? "green" : e === "En curso" ? "blue" : "red",
            }}
          />
        </Card>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-09 · PORTAL ENCARGADOS
// ═══════════════════════════════════════════════════════════
const PortalEncargadosScreen = () => {
  const [selHijo, setSelHijo] = useState(0);
  const hijos = [DATA.estudiantes[0], DATA.estudiantes[1]];
  const est = hijos[selHijo];
  const [mensajes] = useState([
    {
      de: "Mtra. Lucía Romero",
      fecha: "14 Mar",
      asunto: "Progreso excelente en técnica",
      leido: false,
    },
    {
      de: "Coordinación Académica",
      fecha: "10 Mar",
      asunto: "Recordatorio: Recital 20 de junio",
      leido: true,
    },
    {
      de: "Mtra. Lucía Romero",
      fecha: "05 Mar",
      asunto: "Tarea: Practicar escala de Do mayor",
      leido: true,
    },
  ]);

  return (
    <div>
      <PageHeader
        title="Portal de Encargados / Familias"
        subtitle="RF-32, RF-37 · Familia Martínez"
      />

      {/* Selector hijo */}
      <div className="flex gap-3 mb-5">
        {hijos.map((h, i) => (
          <button
            key={i}
            onClick={() => setSelHijo(i)}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 transition-all ${selHijo === i ? "border-indigo-500 bg-indigo-50" : "border-gray-100 bg-white hover:border-gray-200"}`}
          >
            <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-sm">
              {h.nombre[0]}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">
                {h.nombre.split(" ")[0]}
              </p>
              <p className="text-xs text-gray-400">{h.programa}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          {/* Resumen académico */}
          <Card className="p-5">
            <h3 className="font-bold text-gray-800 mb-4">
              Estado Académico de {est.nombre.split(" ")[0]}
            </h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center p-3 bg-indigo-50 rounded-xl">
                <p className="text-2xl font-black text-indigo-600">
                  {est.promedio}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Promedio</p>
              </div>
              <div
                className={`text-center p-3 rounded-xl ${est.asistencia < 75 ? "bg-red-50" : "bg-emerald-50"}`}
              >
                <p
                  className={`text-2xl font-black ${est.asistencia < 75 ? "text-red-500" : "text-emerald-600"}`}
                >
                  {est.asistencia}%
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Asistencia</p>
                {est.asistencia < 75 && (
                  <p className="text-xs text-red-500 font-semibold">⚠ Alerta</p>
                )}
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-xl">
                <p className="text-2xl font-black text-purple-600">3</p>
                <p className="text-xs text-gray-400 mt-0.5">Asignaturas</p>
              </div>
            </div>
            {est.asistencia < 75 && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-3">
                <Icon
                  name="warn"
                  size={18}
                  className="text-red-500 mt-0.5 shrink-0"
                />
                <p className="text-sm text-red-700">
                  {est.nombre.split(" ")[0]} tiene una asistencia del{" "}
                  {est.asistencia}%, por debajo del mínimo requerido (75%). Por
                  favor contáctenos.
                </p>
              </div>
            )}
          </Card>

          {/* Comunicaciones */}
          <Card className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">
                Comunicaciones (RF-37)
              </h3>
              <Btn icon="plus" size="sm">
                Nuevo mensaje
              </Btn>
            </div>
            <div className="space-y-2">
              {mensajes.map((m, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border transition hover:border-indigo-200 cursor-pointer ${!m.leido ? "border-indigo-200 bg-indigo-50" : "border-gray-100 bg-white"}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      {!m.leido && (
                        <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2 mb-0.5" />
                      )}
                      <p className="text-sm font-semibold text-gray-800 inline">
                        {m.asunto}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">De: {m.de}</p>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">
                      {m.fecha}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Eventos próximos */}
        <Card className="p-5 h-fit">
          <h3 className="font-bold text-gray-800 mb-4">Eventos Próximos</h3>
          <div className="space-y-3">
            {DATA.eventos.map((e, i) => (
              <div key={i} className="p-3 rounded-xl bg-gray-50">
                <p className="text-sm font-semibold text-gray-800">
                  {e.nombre}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {e.fecha} · {e.tipo}
                </p>
                <Badge
                  text={e.estado}
                  color={
                    e.estado === "Planificado"
                      ? "blue"
                      : e.estado === "En curso"
                        ? "green"
                        : "gray"
                  }
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-10 · PERIODOS Y OFERTA
// ═══════════════════════════════════════════════════════════
const PeriodosScreen = () => {
  const [sel, setSel] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const periodos = [
    { nombre: "2025-I", fechas: "Ene–Jun 2025", estado: "Activo", items: 18 },
    { nombre: "2024-II", fechas: "Jul–Dic 2024", estado: "Cerrado", items: 16 },
    { nombre: "2025-II", fechas: "Jul–Dic 2025", estado: "Borrador", items: 0 },
  ];
  const estadoColor = (e) =>
    e === "Activo" ? "green" : e === "Cerrado" ? "gray" : "yellow";

  return (
    <div>
      <PageHeader
        title="Periodos Académicos y Oferta"
        subtitle="RF-07, RF-08, RF-09 · Configuración del ciclo académico"
        action={
          <Btn icon="plus" onClick={() => setShowModal(true)}>
            Nuevo Periodo
          </Btn>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Lista periodos */}
        <Card className="p-4">
          <h3 className="font-bold text-gray-700 text-sm mb-3">Periodos</h3>
          <div className="space-y-2">
            {periodos.map((p, i) => (
              <button
                key={i}
                onClick={() => setSel(i)}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all ${sel === i ? "border-indigo-500 bg-indigo-50" : "border-gray-100 hover:border-gray-200"}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-800">{p.nombre}</p>
                  <Badge text={p.estado} color={estadoColor(p.estado)} />
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{p.fechas}</p>
                <p className="text-xs text-gray-400">
                  {p.items} ítems en oferta
                </p>
              </button>
            ))}
          </div>
        </Card>

        {/* Oferta del periodo */}
        <div className="lg:col-span-3 space-y-4">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-gray-800">
                  Oferta del Periodo {periodos[sel].nombre}
                </h3>
                <p className="text-xs text-gray-400">{periodos[sel].fechas}</p>
              </div>
              <div className="flex gap-2">
                <Badge
                  text={periodos[sel].estado}
                  color={estadoColor(periodos[sel].estado)}
                />
                {periodos[sel].estado === "Borrador" && (
                  <Btn size="sm">Publicar Periodo</Btn>
                )}
              </div>
            </div>
            <Table
              cols={[
                "Programa",
                "Nivel",
                "Cupo",
                "Docente Asignado",
                "Inscriptos",
                "Acciones",
              ]}
              rows={DATA.programas.map((p) => [
                p.nombre,
                p.nivel,
                p.cupo,
                p.docente,
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full">
                    <div
                      className="h-1.5 bg-indigo-400 rounded-full"
                      style={{ width: `${(p.inscritos / p.cupo) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs">{p.inscritos}</span>
                </div>,
                <div className="flex gap-1">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">
                    <Icon name="pencil" size={14} />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">
                    <Icon name="x" size={14} />
                  </button>
                </div>,
              ])}
            />
            <div className="mt-3 flex justify-end">
              <Btn icon="plus" variant="secondary" size="sm">
                Agregar ítem a oferta
              </Btn>
            </div>
          </Card>

          {/* Asignación de docentes */}
          <Card className="p-5">
            <h3 className="font-bold text-gray-800 mb-3">
              Carga Docente – RF-09
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DATA.docentes.map((d) => (
                <div
                  key={d.id}
                  className="p-3 rounded-xl border border-gray-100 hover:border-indigo-200 transition"
                >
                  <p className="text-xs font-bold text-gray-700 truncate">
                    {d.nombre}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {d.especialidad}
                  </p>
                  <div className="flex gap-3 mt-2 text-xs">
                    <span className="text-indigo-600 font-semibold">
                      {d.clases} ses.
                    </span>
                    <span className="text-gray-400">{d.estudiantes} est.</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {showModal && (
        <Modal
          title="Nuevo Periodo Académico"
          onClose={() => setShowModal(false)}
        >
          <div className="space-y-3">
            {[
              { label: "Nombre del periodo", placeholder: "Ej: 2025-II" },
              { label: "Fecha de inicio", type: "date" },
              { label: "Fecha de fin", type: "date" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  {f.label}
                </label>
                <input
                  type={f.type || "text"}
                  placeholder={f.placeholder || ""}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Estado inicial
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option>Borrador</option>
              </select>
            </div>
            <div className="flex gap-3">
              <Btn variant="secondary" onClick={() => setShowModal(false)}>
                Cancelar
              </Btn>
              <Btn onClick={() => setShowModal(false)}>Crear Periodo</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-11 · EVENTOS Y RECITALES
// ═══════════════════════════════════════════════════════════
const EventosScreen = () => {
  const [sel, setSel] = useState(DATA.eventos[0]);
  const [showModal, setShowModal] = useState(false);
  const estadoColor = (e) =>
    e === "Planificado" ? "blue" : e === "En curso" ? "green" : "gray";

  const participantes = [
    {
      nombre: "Ana Gabriela Martínez",
      programa: "Piano Clásico",
      confirmado: true,
    },
    {
      nombre: "María José Hernández",
      programa: "Canto Lírico",
      confirmado: true,
    },
    { nombre: "Valentina Solís", programa: "Violín", confirmado: false },
    {
      nombre: "Roberto Giménez",
      programa: "Guitarra Acústica",
      confirmado: true,
    },
  ];

  const evidencias = [
    { nombre: "Ensayo_General_001.jpg", tipo: "Foto", fecha: "15 Mar" },
    { nombre: "Programa_Recital.pdf", tipo: "Documento", fecha: "14 Mar" },
    { nombre: "Ensayo_Video.mp4", tipo: "Video", fecha: "12 Mar" },
  ];

  return (
    <div>
      <PageHeader
        title="Gestión de Eventos y Recitales"
        subtitle="RF-27, RF-28, RF-29 · Calendario de eventos artísticos"
        action={
          <Btn icon="plus" onClick={() => setShowModal(true)}>
            Nuevo Evento
          </Btn>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Lista eventos */}
        <Card className="p-4">
          <h3 className="text-sm font-bold text-gray-700 mb-3">Eventos</h3>
          <div className="space-y-2">
            {DATA.eventos.map((e, i) => (
              <button
                key={i}
                onClick={() => setSel(e)}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all ${sel?.id === e.id ? "border-indigo-500 bg-indigo-50" : "border-gray-100 hover:border-gray-200"}`}
              >
                <p className="text-sm font-bold text-gray-800 leading-tight">
                  {e.nombre}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{e.fecha}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge text={e.tipo} color="purple" />
                  <Badge text={e.estado} color={estadoColor(e.estado)} />
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Detalle evento */}
        <div className="lg:col-span-3 space-y-4">
          {sel && (
            <>
              <Card className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {sel.nombre}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-400">
                        📅 {sel.fecha}
                      </span>
                      <Badge text={sel.tipo} color="purple" />
                      <Badge
                        text={sel.estado}
                        color={estadoColor(sel.estado)}
                      />
                    </div>
                  </div>
                  <Btn variant="secondary" icon="pencil" size="sm">
                    Editar
                  </Btn>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-indigo-50 rounded-xl">
                    <p className="text-xl font-black text-indigo-600">
                      {sel.participantes}
                    </p>
                    <p className="text-xs text-gray-400">Participantes</p>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-xl">
                    <p className="text-xl font-black text-emerald-600">
                      {participantes.filter((p) => p.confirmado).length}
                    </p>
                    <p className="text-xs text-gray-400">Confirmados</p>
                  </div>
                  <div className="text-center p-3 bg-amber-50 rounded-xl">
                    <p className="text-xl font-black text-amber-600">
                      {participantes.filter((p) => !p.confirmado).length}
                    </p>
                    <p className="text-xs text-gray-400">Pendientes</p>
                  </div>
                </div>
              </Card>

              {/* Participantes RF-28 */}
              <Card className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-gray-800">
                    Participantes (RF-28)
                  </h3>
                  <Btn icon="plus" size="sm" variant="secondary">
                    Inscribir participante
                  </Btn>
                </div>
                <div className="space-y-2">
                  {participantes.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                    >
                      <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-xs">
                        {p.nombre[0]}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">
                          {p.nombre}
                        </p>
                        <p className="text-xs text-gray-400">{p.programa}</p>
                      </div>
                      <Badge
                        text={p.confirmado ? "Confirmado" : "Pendiente"}
                        color={p.confirmado ? "green" : "yellow"}
                      />
                      <button className="text-gray-400 hover:text-red-400">
                        <Icon name="x" size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Evidencias RF-29 */}
              <Card className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-gray-800">
                    Portal de Evidencias (RF-29)
                  </h3>
                  <Btn icon="plus" size="sm" variant="secondary">
                    Subir evidencia
                  </Btn>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center mb-3">
                  <Icon
                    name="download"
                    size={28}
                    className="text-gray-300 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-400">
                    Arrastra fotos, videos o documentos aquí
                  </p>
                  <p className="text-xs text-gray-300 mt-0.5">
                    JPG, PNG, MP4, PDF · Máx. 50MB
                  </p>
                </div>
                <div className="space-y-2">
                  {evidencias.map((e, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl border border-gray-100"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center">
                        <Icon
                          name="document"
                          size={14}
                          className="text-gray-400"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-700">
                          {e.nombre}
                        </p>
                        <p className="text-xs text-gray-400">
                          {e.tipo} · {e.fecha}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-indigo-500">
                        <Icon name="download" size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>
            </>
          )}
        </div>
      </div>

      {showModal && (
        <Modal
          title="Nuevo Evento / Recital"
          onClose={() => setShowModal(false)}
        >
          <div className="space-y-3">
            {[
              {
                label: "Nombre del evento",
                placeholder: "Recital de Piano...",
              },
              { label: "Fecha", type: "date" },
              { label: "Lugar / Sala", placeholder: "Auditorio Principal" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  {f.label}
                </label>
                <input
                  type={f.type || "text"}
                  placeholder={f.placeholder || ""}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Tipo de evento
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                {[
                  "Recital",
                  "Concurso",
                  "Taller",
                  "Presentación",
                  "Ensayo General",
                ].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <Btn variant="secondary" onClick={() => setShowModal(false)}>
                Cancelar
              </Btn>
              <Btn onClick={() => setShowModal(false)}>Crear Evento</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-12 · REPORTES Y DASHBOARD DIRECCIÓN
// ═══════════════════════════════════════════════════════════
const ReportesScreen = () => {
  const barMax = 20;
  const bars = DATA.programas.map((p) => ({
    label: p.nombre
      .replace(" Acústica", "")
      .replace(" Clásico", "")
      .replace(" Contemporánea", ""),
    val: p.inscritos,
  }));

  return (
    <div>
      <PageHeader
        title="Reportes y Dashboard Dirección"
        subtitle="RF-33, RF-34 · Vista consolidada del periodo 2025-I"
        action={
          <Btn icon="download" variant="secondary">
            Exportar PDF
          </Btn>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <KPICard
          label="Total Matrículas"
          value="64"
          sub="▲ 8% vs periodo anterior"
          icon="users"
          color="blue"
        />
        <KPICard
          label="Tasa Retención"
          value="91.2%"
          sub="Meta 90% ✓"
          icon="chart"
          color="emerald"
        />
        <KPICard
          label="Estudiantes en Riesgo"
          value="4"
          sub="Asistencia < 70%"
          icon="warn"
          color="rose"
        />
        <KPICard
          label="Docentes Activos"
          value="5"
          sub="28 sesiones/semana"
          icon="star"
          color="amber"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Matrícula por programa */}
        <Card className="p-5">
          <h3 className="font-bold text-gray-800 mb-4">
            Matrícula por Programa (RF-34)
          </h3>
          <div className="space-y-3">
            {bars.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-24 text-right truncate">
                  {b.label}
                </span>
                <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                  <div
                    className="h-6 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-end pr-2 transition-all"
                    style={{ width: `${(b.val / barMax) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">
                      {b.val}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Evolución de matrícula */}
        <Card className="p-5">
          <h3 className="font-bold text-gray-800 mb-4">
            Evolución de Matrícula
          </h3>
          <div className="flex items-end gap-2 h-40">
            {[
              { p: "2023-I", v: 42 },
              { p: "2023-II", v: 48 },
              { p: "2024-I", v: 51 },
              { p: "2024-II", v: 59 },
              { p: "2025-I", v: 64 },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-bold text-indigo-600">{d.v}</span>
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-indigo-400"
                  style={{ height: `${(d.v / 70) * 100}%` }}
                />
                <span className="text-xs text-gray-400">{d.p}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Estudiantes en riesgo */}
      <Card className="p-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <Icon name="warn" size={18} className="text-red-500" /> Estudiantes
            en Riesgo Académico
          </h3>
          <Btn variant="secondary" size="sm" icon="download">
            Exportar
          </Btn>
        </div>
        <Table
          cols={[
            "Estudiante",
            "Programa",
            "Asistencia",
            "Promedio",
            "Inasistencias",
            "Acción",
          ]}
          rows={DATA.estudiantes
            .filter((e) => e.asistencia < 80)
            .map((e) => [
              e.nombre,
              e.programa,
              <span
                className={`font-bold ${e.asistencia < 70 ? "text-red-500" : "text-amber-500"}`}
              >
                {e.asistencia}%
              </span>,
              e.promedio,
              <Badge
                text={e.asistencia < 70 ? "Crítico" : "Alerta"}
                color={e.asistencia < 70 ? "red" : "yellow"}
              />,
              <Btn size="sm" variant="secondary">
                Contactar familia
              </Btn>,
            ])}
        />
      </Card>

      {/* Reportes disponibles */}
      <Card className="p-5">
        <h3 className="font-bold text-gray-800 mb-4">
          Reportes Consolidados Disponibles (RF-33)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Matrícula por periodo", icon: "clipboard" },
            { label: "Asistencia por docente", icon: "check" },
            { label: "Rendimiento académico", icon: "star" },
            { label: "Préstamo de instrumentos", icon: "music" },
          ].map((r) => (
            <button
              key={r.label}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                <Icon name={r.icon} size={16} className="text-indigo-500" />
              </div>
              <span className="text-xs font-semibold text-gray-700">
                {r.label}
              </span>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
//  P-CONF · CONFIGURACIÓN
// ═══════════════════════════════════════════════════════════
const ConfiguracionScreen = () => (
  <div>
    <PageHeader
      title="Configuración del Sistema"
      subtitle="RF-35, RF-02 · Parámetros globales y gestión de usuarios"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="p-5">
        <h3 className="font-bold text-gray-800 mb-4">
          Parámetros Globales (RF-35)
        </h3>
        <div className="space-y-4">
          {[
            { label: "Mínimo de asistencia requerida (%)", val: "75" },
            { label: "Nota mínima de aprobación", val: "6.0" },
            { label: "Período de inscripción (días)", val: "14" },
            { label: "Máximo inasistencias sin justificar", val: "3" },
          ].map((p) => (
            <div key={p.label} className="flex items-center gap-4">
              <label className="flex-1 text-sm text-gray-600">{p.label}</label>
              <input
                defaultValue={p.val}
                className="w-20 text-center border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Btn>Guardar parámetros</Btn>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Usuarios y Roles (RF-02)</h3>
          <Btn icon="plus" size="sm">
            Nuevo usuario
          </Btn>
        </div>
        <div className="space-y-3">
          {[
            {
              nombre: "Ernán Velásquez",
              rol: "Administrador",
              email: "e.velasquez@amac.edu.sv",
              activo: true,
            },
            {
              nombre: "Lucía Romero",
              rol: "Docente",
              email: "l.romero@amac.edu.sv",
              activo: true,
            },
            {
              nombre: "Carlos Portillo",
              rol: "Docente",
              email: "c.portillo@amac.edu.sv",
              activo: true,
            },
            {
              nombre: "Sandra Ramos",
              rol: "Registro/Secretaría",
              email: "s.ramos@amac.edu.sv",
              activo: false,
            },
          ].map((u, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-xs">
                {u.nombre[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">
                  {u.nombre}
                </p>
                <p className="text-xs text-gray-400 truncate">{u.email}</p>
              </div>
              <Badge text={u.rol} color="indigo" />
              <div
                className={`w-2 h-2 rounded-full ${u.activo ? "bg-emerald-400" : "bg-gray-300"}`}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════
//  ROUTER DE PANTALLAS
// ═══════════════════════════════════════════════════════════
const ScreenRouter = ({ screen, setScreen }) => {
  const screens = {
    dashboard: <DashboardScreen setScreen={setScreen} />,
    matricula: <MatriculaScreen setScreen={setScreen} />,
    inscripcion: <InscripcionScreen />,
    programacion: <ProgramacionScreen />,
    asistencia: <AsistenciaScreen />,
    calificaciones: <CalificacionesScreen />,
    portal_estudiante: <PortalEstudianteScreen />,
    portal_encargados: <PortalEncargadosScreen />,
    periodos: <PeriodosScreen />,
    eventos: <EventosScreen />,
    reportes: <ReportesScreen />,
    configuracion: <ConfiguracionScreen />,
  };
  return screens[screen] || <DashboardScreen setScreen={setScreen} />;
};

// ═══════════════════════════════════════════════════════════
//  APP ROOT
// ═══════════════════════════════════════════════════════════
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("coordinacion");
  const [screen, setScreen] = useState("dashboard");

  const handleLogin = (r) => {
    setRole(r);
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setScreen("dashboard");
  };

  if (!loggedIn) return <LoginScreen onLogin={handleLogin} />;
  return (
    <MainLayout
      screen={screen}
      setScreen={setScreen}
      role={role}
      onLogout={handleLogout}
    />
  );
}
