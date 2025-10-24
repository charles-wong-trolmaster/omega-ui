// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface PageParam {
	limit: number;
	offset: number;
}

// initialize an empty api service that we'll inject endpoints into later as needed
const token = sessionStorage.getItem('token');

export const metrcClient = createApi({
	reducerPath: 'metrc',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://172.16.163.157:7000',
		headers: {
			authorization: `Bearer ${token}`
		}
	}),
	tagTypes: ['Locations', 'ChargeStations', 'Sessions', 'Users', 'Tariffs', 'Auth'],
	endpoints: () => ({})
});
