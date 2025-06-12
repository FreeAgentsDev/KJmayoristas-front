"use server"

import { sdk } from "@lib/config"
import medusaError from "@lib/util/medusa-error"
import { getAuthHeaders, getCacheOptions } from "./cookies"
import { HttpTypes } from "@medusajs/types"

export const createCart = async () => {
  // Mock data para desarrollo frontend
  return null
}

export const retrieveCart = async (id: string) => {
  // Mock data para desarrollo frontend
  return null
}

export const updateCart = async (id: string, data: any) => {
  // Mock data para desarrollo frontend
  return null
}

export const addToCart = async (id: string, data: any) => {
  // Mock data para desarrollo frontend
  return null
}

export const removeFromCart = async (id: string, lineId: string) => {
  // Mock data para desarrollo frontend
  return null
}

export const updateLineItem = async (id: string, lineId: string, data: any) => {
  // Mock data para desarrollo frontend
  return null
}

export const addShippingMethod = async (id: string, data: any) => {
  // Mock data para desarrollo frontend
  return null
}

export const addPaymentMethod = async (id: string, data: any) => {
  // Mock data para desarrollo frontend
  return null
}

export const completeCart = async (id: string) => {
  // Mock data para desarrollo frontend
  return null
}

export const listCartOptions = async () => {
  // Mock data para desarrollo frontend
  return {
    shipping_options: []
  }
}

export const updateRegion = async (id: string, regionId: string) => {
  // Mock data para desarrollo frontend
  return null
}
