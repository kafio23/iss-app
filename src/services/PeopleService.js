import BackendService from "./BackendService";

export default class StartupService extends BackendService {
  load() {
    return http
      .request({
        url: `${this.baseUrl}`,
        method: "GET",
        headers: this.getHeaders()
      })
      .then(this.validateCode)
      .then(this.getJson)
      .then(data => {
        console.info(`Received ${data.values} items from the backend.`);
        return data.values.people.map(item => {
          return {
            name: item.name,
            craft: item.craft,
          };
        });
      });
  }
}
