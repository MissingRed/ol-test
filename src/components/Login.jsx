import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { jwtDecode } from "jwt-decode";
import { API_URL } from "../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      /*      const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }),
            });
            
            if (!response.ok) {
                throw new Error("Credenciales incorrectas");
            }
    
            const data = await response.json();
            localStorage.setItem("token", data.token); 

            const decodedToken = jwtDecode(data.token);
            localStorage.setItem("userRole", decodedToken.role[0]);*/

      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/gato.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(5px)",
          transform: "scale(1.1)",
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col items-center justify-center h-screen ">
          <h1 className="text-xl font-bold mb-4 text-white text-center">
            Debes iniciar sesion para acceder a la plataforma
          </h1>
          <div class="card bg-base-100 w-1/3 shadow-xl p-0">
            <p className="p-4 text-center">
              Digita tu documento de identidad del propietario o representante
              legal y la contraseña
            </p>
            <div className="divider pt-0 mt-0"></div>
            <div className="p-4">
              <label class="input input-bordered flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" class="grow" placeholder="Documento" />
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 w-4 opacity-70"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  class="grow"
                  value=""
                  placeholder="Contraseña"
                />
              </label>
              <div className="mt-4">
                <label class="label cursor-pointer">
                  <span class="label-text">Acepto terminos y condiciones</span>
                  <input type="checkbox" checked="checked" class="checkbox" />
                </label>
              </div>
              <Link to="/home" class="btn btn-secondary w-full mt-4">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    /* <div
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="mb-80">
        <span>Debes iniciar sesión para acceder a la plataforma</span>
      </div>

      <Modal show={true} centered>
        <Modal.Header>
          <span className="text-wrap text-center">
            Digita tu documento de identidad del propietario o representante
            legal y la contraseña
          </span>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-4">
              <FloatingLabel
                controlId="email"
                label="Correo electronico"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-4">
              <FloatingLabel
                controlId="password"
                label="Constrseña"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Acepto términos y condiciones"
                required
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              Iniciar Sesión
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>*/
  );
};

export default Login;
