import useFetch from "../../hooks/usefetch/usefetch.hook";

const CustomHookExample1 = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) return <h3>Loading...</h3>;
  if (!error)
    return (
      <>
        {data.map((p) => {
          return (
            <div className="post" key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          );
        })}
      </>
    );
  return <h3>Error: {error}</h3>;
};

export default CustomHookExample1;
