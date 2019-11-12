import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const alumnoSchema = new Schema({
  apellido: {type: String, required: [true, 'Apellido obligatorio']},
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  dni: {type: Number, required: [true, 'DNI Obligatorio']},
  descripcion: String,
  usuarioId: String,
  date:{type: Date, default: Date.now},
  activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Alumno = mongoose.model('Alumno', alumnoSchema);

export default Alumno;