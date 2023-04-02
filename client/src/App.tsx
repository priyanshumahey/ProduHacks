import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Chat from './Chat'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Example /> */}
      <Chat/>
    </QueryClientProvider>
  )
}

// function Example(): JSX.Element {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () =>
//       fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
//         (res) => res.json(),
//       ),
//   })

//   if (isLoading) return <>{'Loading...'}</>

//   if (error instanceof Error) return <>{'An error has occurred: ' + error.message}</>

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{' '}
//       <strong>✨ {data.stargazers_count}</strong>{' '}
//       <strong>🍴 {data.forks_count}</strong>
//     </div>
//   )
// }

function Response(): JSX.Element {
  const { isLoading, error, data } = useQuery({
    // queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:3001/askgpt').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return <>{'Loading...'}</>

  if (error instanceof Error) return <>{'An error has occurred: ' + error.message}</>

  return (
    <div>
      <p>✨ {data.description}</p>
    </div>
  )
}

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}