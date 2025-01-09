export const formattedDate = (date: Date) => {
    const localDate = date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
    }).split(" ")
    return `${localDate[0][0].toUpperCase()}${localDate[0].slice(1)}. ${localDate[2]}`
}