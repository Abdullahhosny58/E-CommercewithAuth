// import { Input, Typography } from "antd";
// import { SearchProps } from "antd/es/input";
// import React from "react";
// import { Control, Controller } from "react-hook-form";

// interface SearchInputProps {
//   control?: Control<any>;
//   name: string;
//   error: any;
//   placeholder: string;
//   onSearch?: SearchProps["onSearch"];
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const SearchInput = ({
//   control,
//   name,
//   error,
//   placeholder,
//   onSearch,
//   onChange,
//   ...props
// }: SearchInputProps) => {
//   const { Text } = Typography;

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field }) => (
//         <>
//           <Input.Search
//             {...field}
//             size="large"
//             placeholder={placeholder}
//             {...props}
//             allowClear
//             onSearch={onSearch}
//             onChange={(event) => {
//               field.onChange(event); // Update form value
//               if (onChange) {
//                 onChange(event); // Call additional onChange prop
//               }
//             }}
//           />
//           {error && <Text type="danger">{error.message}</Text>}
//         </>  
//       )}
//     />
//   );
// };

// export default SearchInput;
