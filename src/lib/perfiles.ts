import equipoDirectivo from "../data/perfiles/equipoDirectivo.json";
import centroPadres from "../data/perfiles/centroPadres.json";
import centroAlumnos from "../data/perfiles/centroAlumnos.json";

const perfilesPorGrupo = {
  "equipo-directivo": equipoDirectivo.integrantes,
  "centro-padres": centroPadres.integrantes,
  "centro-alumnos": centroAlumnos.integrantes
};

export async function listarPerfilesPorGrupo(grupo: string) {
  return perfilesPorGrupo[grupo as keyof typeof perfilesPorGrupo] ?? [];
}
