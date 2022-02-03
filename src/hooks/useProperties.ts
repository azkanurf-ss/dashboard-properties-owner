import { useQuery } from 'react-query'
import axios from 'axios'
import { ReapitConnectSession } from '@reapit/connect-session'
import { PropertyModelPagedResult, PropertyModel } from '@reapit/foundations-ts-definitions'
import { URLS, BASE_HEADERS } from '../constants/api'

type PropertiesParams = {
  pageSize: number
  currentPage: number
  sortBy?: string
  sortType?: string | undefined
  address?: string | undefined
  marketingMode?: string
  type?: string[]
  style?: string[]
  officeId?: string
}
export const useProperties = (session: ReapitConnectSession | null, params: PropertiesParams) => {
  const { pageSize, currentPage, sortBy = '', sortType = '', address, marketingMode, type, style, officeId } = params
  return useQuery<PropertyModelPagedResult, Error>(
    [
      'properties',
      {
        pageSize,
        currentPage,
        sortBy,
        sortType,
        address,
        marketingMode,
        type,
        style,
        officeId,
      },
    ],

    () =>
      axios
        .get(`${window.reapit.config.platformApiUrl}${URLS.PROPERTIES}`, {
          headers: {
            ...BASE_HEADERS,
            Authorization: `Bearer ${session?.accessToken}`,
          },
          params: {
            pageSize: pageSize,
            pageNumber: currentPage,
            sortBy: `${sortType}${sortBy}`,
            address,
            marketingMode,
            type,
            style,
            officeId,
          },
        })
        .then((res) => res.data),

    {
      enabled: !!session,
      retry: false,
    },
  )
}

export const useSingleProperty = (
  session: ReapitConnectSession | null,
  { id, embed }: { id: string; embed: string[] },
) => {
  return useQuery<PropertyModel, Error>(
    ['properties', { id }],
    () =>
      axios
        .get(`${window.reapit.config.platformApiUrl}${URLS.PROPERTIES}/${id}`, {
          headers: {
            ...BASE_HEADERS,
            Authorization: `Bearer ${session?.accessToken}`,
          },
          params: {
            embed,
          },
        })
        .then((res) => res.data),

    {
      enabled: !!session && !!id,
      retry: false,
    },
  )
}
