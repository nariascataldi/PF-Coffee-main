import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ name, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  // console.log(data, error, loading);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${name}`;
  let label = name.charAt(0).toUpperCase() + name.slice(1);
  let option = data.map(diet => diet.name)
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige una {name}</option>
        {data &&
          option.map((diet) => (
            <option key={diet} value={diet}>
              {diet}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectList;
