export const getArtworkUrl = (artworkUrl, size) => {
  if (!artworkUrl) {
    return null; // TODO: default artwork
  }

  // TODO: Artwork type
  return artworkUrl.replace('large.jpg', `t${size}.jpg`);
};
