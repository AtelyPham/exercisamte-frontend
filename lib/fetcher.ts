const fetcher = async <T>(...args: [RequestInfo, RequestInit | undefined]) =>
  fetch(...args).then<T>(res => res.json())

export default fetcher
