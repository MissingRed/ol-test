import { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Datos_generales = () => {
  const [formData, setFormData] = useState({
    razonSocial: "",
    departamento: "",
    ciudad: "",
    telefono: "",
    correo: "",
    fechaRegistro: "",
    poseeEstablecimientos: true,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    let validationErrors = {};
    if (!formData.razonSocial)
      validationErrors.razonSocial = "Campo obligatorio";
    if (!formData.departamento)
      validationErrors.departamento = "Campo obligatorio";
    if (!formData.ciudad) validationErrors.ciudad = "Campo obligatorio";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Datos del formulario:", formData);
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-blue-900 bg-[#e9eef7] p-4">
          Empresa 1
        </h1>
      </div>
      <div className="p-20 pt-16">
        <div className="card flex justify-center ">
          <h2 className="p-4 text-xl font-bold text-blue-900">
            Datos generales
          </h2>
          <div className="divider pt-0 mt-0"></div>
          <div className="p-4 flex">
            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                name="razonSocial"
                placeholder="Razón social*"
                className="input input-bordered w-full mb-2"
                value={formData.razonSocial}
                onChange={handleChange}
              />
              {errors.razonSocial && (
                <span className="text-red-500">{errors.razonSocial}</span>
              )}
              <select
                name="departamento"
                className="select select-bordered w-full mb-2"
                value={formData.departamento}
                onChange={handleChange}
              >
                <option disabled value="">
                  Departamento*
                </option>
                <option value="Han Solo">Han Solo</option>
                <option value="Greedo">Greedo</option>
              </select>
              {errors.departamento && (
                <span className="text-red-500">{errors.departamento}</span>
              )}
              <select
                name="ciudad"
                className="select select-bordered w-full mb-2"
                value={formData.ciudad}
                onChange={handleChange}
              >
                <option disabled value="">
                  Ciudad*
                </option>
                <option value="Han Solo">Han Solo</option>
                <option value="Greedo">Greedo</option>
              </select>
              {errors.ciudad && (
                <span className="text-red-500">{errors.ciudad}</span>
              )}
              <input
                type="text"
                name="telefono"
                placeholder="Telefono"
                className="input input-bordered w-full mb-2"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="flex flex-col gap-2 w-full mb-2">
              <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                className="input input-bordered w-full mb-2"
                value={formData.correo}
                onChange={handleChange}
              />
              <input
                type="date"
                name="fechaRegistro"
                className="input input-bordered w-full mb-2"
                value={formData.fechaRegistro}
                onChange={handleChange}
              />
              <label className="label cursor-pointer">
                <span className="label-text">Posee establecimientos?</span>
                <input
                  type="checkbox"
                  name="poseeEstablecimientos"
                  className="checkbox"
                  checked={formData.poseeEstablecimientos}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-4 right-4 bg-blue-900 text-white p-4 shadow-lg rounded-t-xl">
        <div className="flex justify-between">
          <div className="flex">
            <div className="mr-11">
              <h1>Total ingresos formulario:</h1>
              <h1 className="font-bold text-xl">$100.000.000</h1>
            </div>
            <div>
              <h1>Cantidad de empleados:</h1>
              <h1 className="font-bold text-xl">999</h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="mr-4">
              Si ya ingresaste todos los datos, crea tu formulario aquí
            </h1>
            <button className="btn btn-secondary" onClick={handleSubmit}>
              Enviar Formulario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datos_generales;
