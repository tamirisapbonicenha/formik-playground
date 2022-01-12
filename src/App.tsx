import FormHtmlValidate from './FormHtmlValidate';
import FormFunctionValidate from './FormFunctionValidate';
import FormFunctionValidateVisited from './FormFunctionValidateVisited';
import FormYupValidate from './FormYupValidate';

const App = () => {
  return (
    <>
      <FormHtmlValidate />
      <hr />
      <FormFunctionValidate />
      <hr />
      <FormFunctionValidateVisited />
      <hr />
      <FormYupValidate />
      <hr />
    </>
  );
};

export default App;
