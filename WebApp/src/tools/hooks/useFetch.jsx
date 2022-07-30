import { useEffect, useRef, useState } from "react";

import config from "../../configs/config";

/**
 * Used to fetch data from apis
 * @param {*} url the urlBeing fetch from prefixed with service URI
 * @param {*} defaultObject optional object to be returned if fetch fails
 * @returns {{loaded: boolean, data: object, error: object}}  object destructured
 */
export default function useFetch(url, defaultObject = {}) {
	const isMountedRef = useRef(false);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		isMountedRef.current = true;
		const fetchUrl = `${config.ApplicationServiceUri}${url}`;
		fetch(fetchUrl)
			.then((response) => {
				if (!response.ok) {
					let error = response.text();
					return Promise.reject(error);
				}
				if (response.status === 204) {
					return Promise.resolve(defaultObject);
				}
				return response.json();
			})
			.then(
				(result) => {
					if (isMountedRef.current) setData(result);
				},
				(error) => {
					if (isMountedRef.current) setError(error);
				}
			)
			.catch((e) => {
				if (isMountedRef.current) setError(e);
			})
			.finally(() => {
				if (isMountedRef.current) setLoaded(true);
			});

		//If the caller gets unmounted then we don't waste react resources
		return () => {
			isMountedRef.current = false;
		};
	}, [url]);

	return { loaded, data, error };
}
