import Session from "./Session";

const SupportHeader = (extraMetadata) => {
  let header = {};
  const token = Session.getData("token");
  if (token) {
    header = {
      headers: {
        Authorization: `Bearer ${token}`,
        ...extraMetadata
      }
    };
  }
  return header;
};

export default SupportHeader
