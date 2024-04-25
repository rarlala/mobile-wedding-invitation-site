function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_auto',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/rarla-card-maker-project/image/upload/${option}/wedding/${format}/${filename}.${format}`
}

export default generateImageUrl
