workspace-up:
	docker run --rm -it --name ncf-workspace -v $(PWD)/../:/app -w /app -p 4300:4200 trion/ng-cli-e2e:8.0.6 bash
workspace-exec:
	docker exec -it ncf-workspace bash