"use client";

import { login } from "@/lib/actions";
import Link from "next/link";
import { useFormState } from "react-dom";

// // v1
// export default function LoginPage() {
//   const EmailIcon = () => {
//     return (
//       <svg
//         className="fill-current"
//         width="22"
//         height="22"
//         viewBox="0 0 22 22"
//         fill="none"`
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g opacity="0.5">
//           <path
//             d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
//             fill=""
//           />
//         </g>
//       </svg>
//     );
//   };
//   const PasswordIcon = () => {
//     return (
//       <svg
//         className="fill-current"
//         width="22"
//         height="22"
//         viewBox="0 0 22 22"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g opacity="0.5">
//           <path
//             d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
//             fill=""
//           />
//           <path
//             d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
//             fill=""
//           />
//         </g>
//       </svg>
//     );
//   };
//   const FaceBookIcon = () => {
//     return (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path d="M22.675 0h-21.35c-.73 0-1.325.594-1.325 1.325v21.351c0 .73.594 1.324 1.325 1.324h11.501v-9.304h-3.125v-3.623h3.125v-2.672c0-3.072 1.877-4.745 4.617-4.745 1.312 0 2.439.097 2.765.141v3.204l-1.898.001c-1.489 0-1.778.707-1.778 1.745v2.326h3.559l-.464 3.623h-3.095v9.304h6.065c.73 0 1.325-.594 1.325-1.324v-21.351c0-.731-.595-1.325-1.325-1.325z" />
//       </svg>
//     );
//   };
//   const GoogleIcon = () => {
//     return (
//       <svg
//         width="20"
//         height="20"
//         viewBox="0 0 20 20"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g clipPath="url(#clip0_191_13499)">
//           <path
//             d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
//             fill="#4285F4"
//           />
//           <path
//             d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
//             fill="#34A853"
//           />
//           <path
//             d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
//             fill="#FBBC05"
//           />
//           <path
//             d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
//             fill="#EB4335"
//           />
//         </g>
//         <defs>
//           <clipPath id="clip0_191_13499">
//             <rect width="20" height="20" fill="white" />
//           </clipPath>
//         </defs>
//       </svg>
//     );
//   };

//   const InputField = ({
//     id = "",
//     label,
//     type = "text",
//     placeholder,
//     icon,
//     // inputProps,
//   }) => {
//     return (
//       <>
//         <div className="mb-4">
//           <label for={id} className="text-[1rem] block text-gray-700">
//             {label}
//           </label>

//           <div className="relative mt-1">
//             <input
//               id={id}
//               type={type}
//               placeholder={placeholder}
//               className="w-full border border-stroke px-3 py-2 text-black outline-none focus:border-blue-400 focus-visible:shadow-none dark:border-[#3d4d60] dark:bg-[#1d2a39] dark:text-white dark:focus:border-primary"
//             />
//             {icon && (
//               <span className="absolute inset-y-0 right-3 flex items-center">
//                 {icon}
//               </span>
//             )}
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <>
//       <div className="">
//         <div className="w-[450px] max-sm:w-[90%]">
//           <div className="mb-3 text-center font-light text-[#495057] text-[2.1rem]">
//             <Link href="">
//               <b>Admin</b>LTE
//             </Link>
//           </div>

//           <div className="bg-white shadow-lg p-10">
//             <p className="px-5 pb-5 text-center text-gray-500">
//               Sign in to start your session
//             </p>
//             <form className="">
//               <InputField
//                 id="email"
//                 label="Email"
//                 type="email"
//                 placeholder="Enter your email"
//                 icon={<EmailIcon />}
//               />
//               <InputField
//                 id="pass"
//                 label="Password"
//                 type="password"
//                 placeholder="6+ Charaters, 1 Capital letter"
//                 icon={<PasswordIcon />}
//               />

//               <div className="flex items-center justify-between mb-10">
//                 <label className="flex items-center">
//                   <input type="checkbox" />
//                   <span className="ml-2 text-gray-700">Remember Me</span>
//                 </label>
//                 <a href="#" className="text-blue-500 hover:underline">
//                   I forgot my password
//                 </a>
//               </div>

//               <div className="mb-4">
//                 <button
//                   type="submit"
//                   className="w-full border-primary bg-primary p text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600  transition hover:bg-opacity-90 cursor-pointer"
//                 >
//                   Sign In
//                 </button>
//               </div>
//             </form>

//             <div className="text-center text-gray-500 mb-4">- OR -</div>

//             <div className="flex flex-col gap-3">
//               {/* <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none">
//                 <FaceBookIcon />
//                 Sign in using Facebook
//               </button> */}
//               <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-[#E2E8F0] bg-[#EFF4FB] p-4 hover:bg-opacity-50 dark:border-[#2E3A47] dark:bg-[#313D4A] dark:hover:bg-opacity-50">
//                 <GoogleIcon />
//                 Sign in using Google+
//               </button>
//             </div>

//             <div className="text-center mt-4">
//               <a href="#" className="text-blue-500 hover:underline">
//                 Register a new membership
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>

//   );
// }

// v2
export default function LoginPage() {
  const [state, formAction] = useFormState(login, undefined);

  const EmailIcon = () => {
    return (
      <svg
        className="fill-current"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
            fill=""
          />
        </g>
      </svg>
    );
  };
  const PasswordIcon = () => {
    return (
      <svg
        className="fill-current"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
            fill=""
          />
          <path
            d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
            fill=""
          />
        </g>
      </svg>
    );
  };
  const GoogleIcon = () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_191_13499)">
          <path
            d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
            fill="#4285F4"
          />
          <path
            d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
            fill="#34A853"
          />
          <path
            d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
            fill="#FBBC05"
          />
          <path
            d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
            fill="#EB4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_191_13499">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  const InputField = ({
    id = "",
    label,
    type = "text",
    placeholder,
    icon,
    error,
    // inputProps,
  }) => {
    return (
      <>
        <div className="mb-4">
          <label htmlFor={id} className="text-[1rem] block text-gray-700">
            {label}
          </label>

          <div className="relative mt-1">
            <input
              id={id}
              type={type}
              name={id}
              placeholder={placeholder}
              className="w-full border border-stroke px-3 py-2 text-black outline-none focus:border-blue-400 focus-visible:shadow-none dark:border-[#3d4d60] dark:bg-[#1d2a39] dark:text-white dark:focus:border-primary"
            />
            {icon && (
              <span className="absolute inset-y-0 right-3 flex items-center">
                {icon}
              </span>
            )}
          </div>
          <p className="text-red-500 ">{error}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="bg-white shadow-lg px-10 py-12">
        <p className="px-5 pb-5 text-center text-gray-500">
          Login to start your session
        </p>
        {state?.status === "error" && typeof state.message === "string" && (
          <p className="text-red-500 text-center">{state.message}</p>
        )}

        <form className="" action={formAction}>
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            icon={<EmailIcon />}
            error={state?.status && state.message?.email}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="6+ Charaters, 1 Capital letter"
            icon={<PasswordIcon />}
            error={state?.status && state.message?.password}
          />

          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center">
              <input type="checkbox" />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <Link
              className="text-blue-500 hover:underline"
              href="/forgot-password"
            >
              I forgot my password
            </Link>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full cursor-pointer  border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            >
              Sign In
            </button>
          </div>

          <div className="mb-12">
            <button className="flex w-full items-center justify-center gap-3.5 border border-[#E2E8F0] bg-[#EFF4FB] p-4 hover:bg-opacity-50 dark:border-[#2E3A47] dark:bg-[#313D4A] dark:hover:bg-opacity-50">
              <span>
                <GoogleIcon />
              </span>
              Sign in with Google
            </button>
          </div>
        </form>

        <div className="text-center">
          <p>
            Don’t have any account?&nbsp;
            <Link href="/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
