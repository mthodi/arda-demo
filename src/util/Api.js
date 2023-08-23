import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

export default axios.create({
  baseURL: "https://api.demo.the-maravian.com",
  headers: {
    'Content-Type': 'application/json',
  }
});

const baseURL = "https://api.demo.the-maravian.com";

export function getASNumbers() {
  return axios.get('https://api.demo.the-maravian.com/api/asn/').then((response) => response.data);
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

export function getCountryOverviewStats(id) {
  return axios.get(`${baseURL}/api/country/stats/overview/`, {
    params: { country_id: id }
  }).then((response) => response.data);
}

export function getCountryASNs(id) {
  return axios.get(`${baseURL}/api/country/asns/`, {
    params: { country_id: id }
  }).then((response) => response.data);
}

//================Region API CALLS ====================

export function regions() {
  return axios.get(`${baseURL}/api/`).then((response) => response.data);
}

export function getRegion(id) {
  return axios.get(`${baseURL}/api/region/${id}`).then((response) => response.data);
}

export function getRegionOverviewStats(id) {
  return axios.get(`${baseURL}/api/region/stats/overview/`, {
    params: { region_id: id }
  }).then((response) => response.data);
}

export function getRegionASNs(id) {
  return axios.get(`${baseURL}/api/region/asns/`, {
    params: { region_id: id }
  }).then((response) => response.data);
}

// ================= React Qeury hooks ==============================
export function useIXPs() {
  return useQuery(['ixps'], getIXPs);
}

export function useIXP(id) {
  return useQuery(['ixp', id], () => getIXP(id));
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

//================Country API Hooks ====================
export function useCountryList () {
  return useQuery(['countries'], getCountryList);
}

export function useGetCountry(id) {
  return useQuery(['country', id], () => getCountry(id));
}

export function useGetCountryOverviewStats(id) {
  return useQuery(['country', id, 'overview'], () => getCountryOverviewStats(id));
}

export function useGetCountryASNs(id) {
  return useQuery(['country', id, 'asns'], () => getCountryASNs(id));
}


//================Region API Hooks ====================
//region list
export function useRegions() {
  return useQuery(['regions'], regions);
}

export function useGetRegion(id) {
  return useQuery(['region', id], () => getRegion(id));
}

export function useGetRegionOverviewStats(id) {
  return useQuery(['region', id, 'overview'], () => getRegionOverviewStats(id));
}

export function useGetRegionASNs(id) {
  return useQuery(['region', id, 'asns'], () => getRegionASNs(id));
}