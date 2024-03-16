/**
 * @swagger
 * tags:
 *  name: Category
 *  description : Category Module and Routes
 */

/** 
 * @swagger
 * 
 *  components:
 *      schemas:
 *          CreateCategory:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   icon
 *              properties:
 *                  name:
 *                      type: string
 *                  slug:
 *                      type: string
 *                  icon:
 *                      type: string
 *                  parent:
 *                      type: string
 */

/**
 * @swagger
 * 
 * /api/category:
 *  post:
 *      summary: create new category
 *      tags:
 *          -   Category
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *      responses:  
 *       200: 
 *         description: Success 
 */

/**
 * @swagger
 * 
 * /api/category:
 *  get:
 *      summary: get all categories
 *      tags:
 *          -   Category
 *      responses:  
 *       200: 
 *         description: Success 
 */

