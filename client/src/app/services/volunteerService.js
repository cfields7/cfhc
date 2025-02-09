const serverPath = "https://cfhc.fly.dev/api";

export const volunteerService = {

  async getTime() {
    const res = await fetch(serverPath + '/requests/time', {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });

    return Promise.resolve(res);
  },

  async getFinance() {
    const res = await fetch(serverPath + '/requests/finance', {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });

    return Promise.resolve(res);
  },

  async getItems() {
    const res = await fetch(serverPath + '/requests/item', {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
    return Promise.resolve(res);
  },

  async getPostById(postId, service) {
    const res = await fetch(serverPath + `/requests/${service}/${postId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

    return Promise.resolve(res);
  },


}