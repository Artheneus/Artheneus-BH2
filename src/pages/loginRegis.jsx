import React from "react";
import { productsData } from "../data/data";
import ProductPrint from "../component/ProdsPrint";

const loginRegis = () => {
  const [certain, setCertain] = React.useState({ id: null, status: false });

  return (
    <div>
      <ul>
        {productsData.map((product, id) => {
          if (product.id == 2) {
            return <ProductPrint key={id} product={product} />;
          } else {
            null;
          }
        })}
      </ul>
    </div>
  );
};

export default loginRegis;

// export default function App() {
//   const [showOptions, setShowOptions] = React.useState({ id: null, status: false });

//   return (
//     <div className="App">
//       {data.map((comment, index) => (
//         <div key={index} className="comment-container">
//           {comment.name}
//           <button onClick={() => setShowOptions({ id: comment.id, status: !showOptions.status })}>
//             <FaEllipsisV />
//           </button>

//           {showOptions.status && comment.id === showOptions.id ? (
//             <div className="options">Report this comment</div>
//           ) : null}
//         </div>
//       ))}
//     </div>
//   );
// }
