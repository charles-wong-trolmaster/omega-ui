import { metrcClient } from '../../metrc-client';

const chargeStationApi = metrcClient.injectEndpoints({
	endpoints: (builder) => ({
		getOneChargeStation: builder.query({
			query: (id) => `/admin/stations/${id}`,
			providesTags: (result, error, id) => [{ type: 'ChargeStations', id }]
		})
	})
});

export const { useGetOneChargeStationQuery } = chargeStationApi;
