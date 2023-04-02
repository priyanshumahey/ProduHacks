import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Chat from './Chat'
import './index.css'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Example /> */}
      <Chat/>
    </QueryClientProvider>
  )
}

function Example(): JSX.Element {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return <>{'Loading...'}</>

  if (error instanceof Error) return <>{'An error has occurred: ' + error.message}</>
