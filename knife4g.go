package knife4g

import (
	"embed"
	"github.com/gin-gonic/gin"
	myTemplate "github.com/hononet639/knife4g/template"
	"log"
	"net/http"
	"os"
	"strings"
	"text/template"
)

var (
	//go:embed front
	Front   embed.FS
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
	myTemplate.RelativePath = config.RelativePath
	docJsonPath := config.RelativePath + "/docJson"
	servicesPath := config.RelativePath + "/front/service"
	docPath := config.RelativePath + "/index"
	app9f2e4e4ePath := config.RelativePath + "/front/webjars/js/app.9f299301.js"

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
		case app9f2e4e4ePath:
			ctx.Data(200, "text/javascript", []byte(myTemplate.GetApp9f299301(config.RelativePath)))
		case servicesPath:
			ctx.JSON(http.StatusOK, []service{s})
		case docPath:
			tp, err := template.New("doc").Parse(myTemplate.Doc)
			if err != nil {
				log.Println(err)
			}
			err = tp.Execute(ctx.Writer, config)
			if err != nil {
				log.Println(err)
			}
		case docJsonPath:
			ctx.Data(http.StatusOK, "application/json; charset=utf-8", docJson)
		default:
			ctx.FileFromFS(strings.TrimPrefix(ctx.Request.RequestURI, config.RelativePath), http.FS(Front))
		}

	}
}
