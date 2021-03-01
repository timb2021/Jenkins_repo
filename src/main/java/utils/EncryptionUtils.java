package utils;


import org.apache.commons.codec.binary.Base64;

public class EncryptionUtils {

    public static String encrypt(String property){
        String encryptedStr = Base64.encodeBase64String(property.getBytes());
        return encryptedStr;
    }

    public static String decrypt(String encryptedProperty){
        String decryptedStr = new String(Base64.decodeBase64(encryptedProperty));
        return decryptedStr;
    }

    public static void main(String[] args) {
       String encryptedPass = encrypt("03e05b3f-f630-4e4d-acee-454122a6dd72");
        System.out.println("encrypted: " + encryptedPass);

        String decryption = decrypt(encryptedPass);
        System.out.println("decryption: " + decryption);

    }



}













