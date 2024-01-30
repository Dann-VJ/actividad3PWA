import React, { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// impotamos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

let user = {
  fullname: 'Smith'
};


const App = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://tramitevisaamericanaqueretaro.com/server/EmailController/sendEmail');
      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      toast.error('Asegúrate de que la API está disponible', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

    }
  };

  // fetchDatav2 sin problemas de CORS
  const fetchDatav2 = async () => {
    try {
      const response = await fetch('https://tramitevisaamericanaqueretaro.com/server/EmailController/sendEmailv2', {
        method: 'POST',
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log('Data:', data);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error('Asegúrate de que la API está disponible v2', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };


  return (
    <div class="mt-5 text-center">
      <h1>Bienvenido al envío de correo</h1>
      <div class="row mt-5">
        <div class="col-6">
          <button class="btn btn-primary" onClick={fetchData}>
            Correo sin CORS 💀
          </button>
        </div>

        <div class="col-6">
          <button className="btn btn-primary" onClick={fetchDatav2}>
            Correo con CORS 👍  
          </button>
        </div>
      </div>

      <ToastContainer />
      {/* {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )} */}
    </div>
  );
};

export default App;