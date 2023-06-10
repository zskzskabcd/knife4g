# Knife4g

use knife4j-front to show the api documents for gin

# Usage

1. Add comments to your API source code
2. Download [Swag](https://github.com/swaggo/swag) for Go by using:
3. Run `swag init -ot json` in your project directory
4. Run `go get github.com/zskzskabcd/knife4g`
5. Add router to your gin project

   ### example:

   ```go
   package main

   import (
       "github.com/gin-gonic/gin"
       "github.com/zskzskabcd/knife4g"
   )

   func main() {
       engine := gin.Default()
       engine.GET("/doc/*any", knife4g.Handler(knife4g.Config{RelativePath: "/doc"}))
       engine.Run(":80")
   }
   ```

6. Visit http://localhost/doc/index

# Acknowledgement

Thanks to [knife4j](https://github.com/xiaoymin/swagger-bootstrap-ui)
