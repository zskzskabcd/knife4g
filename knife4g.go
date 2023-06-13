package knife4g

import (
	"embed"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

var (
	//go:embed front
	front   embed.FS
	docJson []byte
	s       service
)

type Config struct {
	RelativePath string
}

type service struct {
	Name           string `json:"name"`
	Url            string `json:"url"`
	SwaggerVersion string `json:"swaggerVersion"`
	Location       string `json:"location"`
}

func init() {
	var err error
	docJson, err = os.ReadFile("./docs/swagger.json")
	if err != nil {
		log.Println("no swagger.json found in ./docs")
	}
}

func Handler(config Config) gin.HandlerFunc {
	docJsonPath := config.RelativePath + "/front/docJson"
	servicesPath := config.RelativePath + "/front/services.json"
	docPath := config.RelativePath + "/index"

	s.Url = "/docJson"
	s.Location = "/docJson"
	s.Name = "API Documentation"
	s.SwaggerVersion = "2.0"

	return func(ctx *gin.Context) {
		if ctx.Request.Method != http.MethodGet {
			ctx.AbortWithStatus(http.StatusMethodNotAllowed)
			return
		}
		switch ctx.Request.RequestURI {
		case servicesPath:
			ctx.JSON(http.StatusOK, []service{s})
		case docPath:
			ctx.Redirect(http.StatusMovedPermanently, config.RelativePath+"/front/doc.html")
		case docJsonPath:
			ctx.Data(http.StatusOK, "application/json; charset=utf-8", docJson)
		default:
			ctx.FileFromFS(strings.TrimPrefix(ctx.Request.RequestURI, config.RelativePath), http.FS(front))
		}

	}
}
