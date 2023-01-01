terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "mattertwo"

    workspaces {
      name = "mattertwo-github-io"
    }
  }
}