/**
 * @swagger
 * tags:
 *  name: Auth
 *  description : OTP authentication service
 */

/** 
 * @swagger
 * 
 *  components:
 *      schemas:
 *          SendOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 */

/**
 * @swagger
 * 
 * /api/auth/send-otp:
 *  post:
 *      summary: OTP login
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/SendOTP"
 *      responses:  
 *       200: 
 *         description: Success 
 */

