import fetch from "isomorphic-fetch";

export const crudder = <T>(domain: string) => (resource: string) => {

    const url = `${domain}/${resource}`;

    return {
      post: (value: T): Promise<T> =>
        fetch(url, { method: "POST", body: JSON.stringify(value) }).then(
          (res: any): T => res.json()
        ),
      get: (): Promise<T[]> => fetch(url).then((res: any): T[] => res.json()),
    };
  };
