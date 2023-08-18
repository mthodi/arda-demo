import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

export default axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    'Content-Type': 'application/json',
  }
});

const baseURL = "http://127.0.0.1:8000";

export function getASNumbers() {
  return axios.get('http://127.0.0.1:8000/api/asn/').then((response) => response.data);
}

export function getAsnByCountry(country) {
  return axios.get(`/api/asn/${country}`).then((response) => response.data);
}

export function getASN(id) {
  return axios.get(`/api/asn/${id}`).then((response) => response.data);
}

//=====================================IXP API CALLS =====================================

export function getIXPs() {
  return axios.get(`${baseURL}/api/ixp/`).then(function (response){
    console.log(response.data.results);
    return response.data;
  });
}

export function getIXP(id) {
  return axios.get(`${baseURL}/api/ixp/${id}`).then((response) => response.data);
}

export function getIXPMemberDist(id) {
  return axios.get(`${baseURL}/api/ixp/members/classes/`, {
    params: { ixp_id: id }
  }
  ).then((response) => response.data);
}

export function getIXP_ASN_Stats(ixp_id) {
  return axios.get(`${baseURL}/api/stats/ixp/asn/latest/`, {
    params: { ixp_id: ixp_id }
  })
  .then((response) => response.data);
}

export function getIXP_IPv4_Stats(id) {
  return axios.get(`${baseURL}/api/stats/ixp/ipv4/latest/`, {
    params: { ixp_id: id }
  }).then((response) => response.data);
}

export function getIXPGrowth(id) {
  return axios.get(`${baseURL}/api/ixp/growth/`, {
    params: { ixp_id: id }
  }).then((response) => response.data);
}

export function getVisibleASNTrends(id) {
  return axios.get(`${baseURL}/api/stats/ixp/asn/trend/`, {
    params: { ixp_id: id }
  }).then((response) => response.data);
}

export function getVisiblePrefixTrends(id) {
  return axios.get(`${baseURL}/api/stats/ixp/ipv4/trend/`, {
    params: { ixp_id: id }
  }).then((response) => response.data);
}

//================Country API CALLS ====================

export function getCountryList() {
  return axios.get(`${baseURL}/api/country/`).then((response) => response.data);
}

export function getCountry(id) {
  return axios.get(`${baseURL}/api/country/${id}`).then((response) => response.data);
}

export function regions() {
  return axios.get(`${baseURL}/api/`).then((response) => response.data);
}

export function getRegion(id) {
  return axios.get(`${baseURL}/api/region/${id}`).then((response) => response.data);
}

// ================= React Qeury hooks ==============================
export function useIXPs() {
  return useQuery(['ixps'], getIXPs);
}

export function useIXP(id) {
  return useQuery(['ixp', id], () => getIXP(id));
}

export function useCountryList () {
  return useQuery(['countries'], getCountryList);
}

//region list
export function useRegions() {
  return useQuery(['regions'], regions);
}

export function useGetIXP_ASN_Stats(id) {
  return useQuery(['stats-ixp', id, 'asn'], () => getIXP_ASN_Stats(id));
}

export function useGetIXP_IPv4_Stats(id) {
  return useQuery(['stats-ixp', id, 'ipv4'], () => getIXP_IPv4_Stats(id));
}

export function useGetIXPMemberDist(id) {
  return useQuery(['ixp', id, 'memberDist'], () => getIXPMemberDist(id));
}

export function useGetIXPGrowth(id) {
  return useQuery(['ixp', id, 'growth'], () => getIXPGrowth(id));
}

export function useGetVisibleASNTrends(id){
  return useQuery(['ixp', id, 'asn-trends'], () => getVisibleASNTrends(id));
}

export function useGetVisiblePrefixesTrends(id){
  return useQuery(['ixp', id, 'ipv4-trends'], () => getVisiblePrefixTrends(id))
}