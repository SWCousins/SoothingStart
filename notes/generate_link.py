#User object
#    -check security/voucher
#    -use security/signatureKey to generate url
#    -use part of the url as input for sign up page to generate new user security/vouchers

def generateLink(user):
    if user.security.voucher.valid == true:
        return "https://www.soothingstart.com/new_user" + user.security.signatureKey
    else:
        return "Invalid user"