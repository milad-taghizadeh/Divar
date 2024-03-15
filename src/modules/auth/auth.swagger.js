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
 *          CheckOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   code
 *              properties:
 *                  mobile:
 *                      type: string
 *                  code:
 *                      type: number
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

/**
 * @swagger
 * 
 * /api/auth/check-otp:
 *  post:
 *      summary: OTP login
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/CheckOTP"
 *      responses:  
 *       200: 
 *         description: Success 
 */

