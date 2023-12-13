// function Wishlist() {
//     return (
//       <div>
//         <h1 className="d-flex justify-content-center mb-4">Wishlist</h1>
//         <div className='d-flex justify-content-center'>Coming soon...</div>
//       </div>
//     );
//   }

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Wishlist(){
  const notify = () => toast("Game added to cart!");

  return (
    <div>
      <button onClick={notify}>Add to cart</button>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
  
  export default Wishlist;