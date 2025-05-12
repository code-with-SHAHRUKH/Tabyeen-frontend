
// export const fetchfilteredVideos = async ({
//   search = '',
//   page = 1,
//   limit = 10
// }: {
//   search?: string;
//   page?: number;
//   limit?: number;
// }) => {
//   const queryParams = new URLSearchParams({
//     ...(search ? { search } : {}),
//     page: String(page),
//     limit: String(limit),
//   });

//   const res = await fetch(`http://localhost:3001/api/v1/videos/videos-list?${queryParams}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch videos');
//   }

//   const data = await res.json();
//   return data; // { items, meta, message }
// };