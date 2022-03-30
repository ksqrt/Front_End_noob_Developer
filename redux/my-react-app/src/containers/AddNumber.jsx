import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (size, plus) {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
}

// connect api 는 2번 호출이 된다 첫번째 인자는 매핑정보 두번째 인자는 디스패치
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

// export default class AddNumberForm extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function(size) {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }}
//       ></AddNumber>
//     );
//   }
//   s;
// }
