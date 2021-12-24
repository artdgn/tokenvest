export const accountDisplay = (address) => {
    return address.substring(0, 6) + "..." + address.substring(address.length - 4)
}

export const parseErrorMessage = (error) => {
    let message = 'An error has occurred.'
    if (error?.message) {
        message = error.message
    } else if (error?.error?.message) {
        // For Alchemy with ethers.providers.Web3Provider(window.ethereum) with alchemy
        message = error.error.message.split(': ')[1]
    } else if (error?.data?.message) {
        // For ethers.providers.JsonRpcProvider()
        message = error.data.message.match(/\'(.*)\'/).pop()
    } else if (JSON.parse(error.body)?.error?.message) {
        // For ethers.providers.Web3Provider(window.ethereum)
        message = JSON.parse(error.body)
            .error.message.match(/\'(.*)\'/)
            .pop()
    }
    return message
}