"use server"

import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"

export const listRegions = async () => {
  // Mock data para desarrollo frontend
  return [
    {
      id: "1",
      name: "América",
      countries: [
        { iso_2: "MX", name: "México" },
        { iso_2: "US", name: "Estados Unidos" }
      ]
    }
  ] as HttpTypes.StoreRegion[]
}

export const retrieveRegion = async (id: string) => {
  // Mock data para desarrollo frontend
  return {
    id,
    name: "América",
    countries: [
      { iso_2: "MX", name: "México" },
      { iso_2: "US", name: "Estados Unidos" }
    ]
  } as HttpTypes.StoreRegion
}

export const getRegion = async (countryCode: string) => {
  // Mock data para desarrollo frontend
  return {
    id: "1",
    name: "América",
    countries: [
      { iso_2: "MX", name: "México" },
      { iso_2: "US", name: "Estados Unidos" }
    ]
  } as HttpTypes.StoreRegion
}

// "use server"

// import { sdk } from "@lib/config"
// import medusaError from "@lib/util/medusa-error"
// import { HttpTypes } from "@medusajs/types"
// import { getCacheOptions } from "./cookies"

// export const listRegions = async () => {
//   const next = {
//     ...(await getCacheOptions("regions")),
//   }

//   return sdk.client
//     .fetch<{ regions: HttpTypes.StoreRegion[] }>(`/store/regions`, {
//       method: "GET",
//       next,
//       cache: "force-cache",
//     })
//     .then(({ regions }) => regions)
//     .catch(medusaError)
// }

// export const retrieveRegion = async (id: string) => {
//   const next = {
//     ...(await getCacheOptions(["regions", id].join("-"))),
//   }

//   return sdk.client
//     .fetch<{ region: HttpTypes.StoreRegion }>(`/store/regions/${id}`, {
//       method: "GET",
//       next,
//       cache: "force-cache",
//     })
//     .then(({ region }) => region)
//     .catch(medusaError)
// }

// const regionMap = new Map<string, HttpTypes.StoreRegion>()

// export const getRegion = async (countryCode: string) => {
//   try {
//     if (regionMap.has(countryCode)) {
//       return regionMap.get(countryCode)
//     }

//     const regions = await listRegions()

//     if (!regions) {
//       return null
//     }

//     regions.forEach((region) => {
//       region.countries?.forEach((c) => {
//         regionMap.set(c?.iso_2 ?? "", region)
//       })
//     })

//     const region = countryCode
//       ? regionMap.get(countryCode)
//       : regionMap.get("us")

//     return region
//   } catch (e: any) {
//     return null
//   }
// }
