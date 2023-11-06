import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [createUser] = useMutation(CREATE_USER);
  console.log(userFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await createUser({ variables: { ...userFormData } });
      console.log("Data:");
      console.log(data);

      if (!data) {
        throw new Error("something went wrong!");
      }

      const { token} = await data.createUser;
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: "",
      password: ""
    });
  };

return (
  <>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={handleInputChange} type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={handleInputChange} type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="https://giphy.com/embed/P7JmDW7IkB7TW">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
          </>
);


  {/* // return (
  //   <>
  //     <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
  //       <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
  //         Something went wrong with your signup!
  //       </Alert>

  //       <Form.Group className="mb-3">
  //         <Form.Label htmlFor="username">Username</Form.Label>
  //         <Form.Control className="ml-3" */}
  {/* //           type="text"
  //           placeholder="Your username"
  //           name="username"
  //           onChange={handleInputChange}
  //           value={userFormData.username}
  //           required
  //         />
  //         <Form.Control.Feedback className="mt-3 ml-20" type="invalid">Username is required!</Form.Control.Feedback>
  //       </Form.Group>

  //       <Form.Group className="mb-3">
  //         <Form.Label htmlFor="email">Email</Form.Label>
  //         <Form.Control className="ml-3" */}
  {/* //           type="email"
  //           placeholder="Your email address"
  //           name="email"
  //           onChange={handleInputChange}
  //           value={userFormData.email}
  //           required
  //         />
  //         <Form.Control.Feedback className="mt-3 ml-16"  type="invalid">Email is required!</Form.Control.Feedback>
  //       </Form.Group>

  //       <Form.Group className="mb-3">
  //         <Form.Label htmlFor="password">Password</Form.Label>
  //         <Form.Control className="ml-3" */}
  {/* //           type="password"
  //           placeholder="Your password"
  //           name="password"
  //           onChange={handleInputChange}
  //           value={userFormData.password}
  //           required
  //         />
  //         <Form.Control.Feedback className="mt-3 ml-20"  type="invalid">Password is required!</Form.Control.Feedback>
  //       </Form.Group>
  //       <Button */}
  {/* //         disabled={!(userFormData.username && userFormData.email && userFormData.password)}
  //         type="submit"
  //         variant="success">
  //         Submit
  //       </Button>
  //     </Form>
  //   </>
  // ); */}
};

export default SignupForm;
